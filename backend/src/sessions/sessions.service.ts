import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';

@Injectable()
export class SessionsService {
    constructor(private prisma: PrismaService) { }

    async create(createSessionDto: CreateSessionDto) {
        const { consultantId, clientId, startTime, endTime } = createSessionDto;

        // Verify users exist
        const consultant = await this.prisma.user.findUnique({
            where: { id: consultantId },
        });
        const client = await this.prisma.user.findUnique({
            where: { id: clientId },
        });

        if (!consultant || !client) {
            throw new NotFoundException('Consultant or client not found');
        }

        return this.prisma.session.create({
            data: {
                consultantId,
                clientId,
                startTime,
                endTime,
            },
            include: {
                consultant: {
                    select: { id: true, name: true, role: true },
                },
                client: {
                    select: { id: true, name: true, role: true },
                },
            },
        });
    }

    async findAll() {
        return this.prisma.session.findMany({
            include: {
                consultant: {
                    select: { id: true, name: true, role: true },
                },
                client: {
                    select: { id: true, name: true, role: true },
                },
                messages: {
                    take: 1,
                    orderBy: { createdAt: 'desc' },
                },
                _count: {
                    select: { messages: true },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    async findOne(id: string) {
        const session = await this.prisma.session.findUnique({
            where: { id },
            include: {
                consultant: {
                    select: { id: true, name: true, role: true },
                },
                client: {
                    select: { id: true, name: true, role: true },
                },
                messages: {
                    include: {
                        sender: {
                            select: { id: true, name: true, role: true },
                        },
                    },
                    orderBy: { createdAt: 'asc' },
                },
            },
        });

        if (!session) {
            throw new NotFoundException('Session not found');
        }

        return session;
    }

    async update(id: string, updateSessionDto: UpdateSessionDto) {
        const session = await this.prisma.session.findUnique({
            where: { id },
        });

        if (!session) {
            throw new NotFoundException('Session not found');
        }

        return this.prisma.session.update({
            where: { id },
            data: updateSessionDto,
            include: {
                consultant: {
                    select: { id: true, name: true, role: true },
                },
                client: {
                    select: { id: true, name: true, role: true },
                },
            },
        });
    }

    async remove(id: string) {
        const session = await this.prisma.session.findUnique({
            where: { id },
        });

        if (!session) {
            throw new NotFoundException('Session not found');
        }

        return this.prisma.session.delete({
            where: { id },
        });
    }

    async findByUser(userId: string) {
        return this.prisma.session.findMany({
            where: {
                OR: [
                    { consultantId: userId },
                    { clientId: userId },
                ],
            },
            include: {
                consultant: {
                    select: { id: true, name: true, role: true },
                },
                client: {
                    select: { id: true, name: true, role: true },
                },
                messages: {
                    take: 1,
                    orderBy: { createdAt: 'desc' },
                },
                _count: {
                    select: { messages: true },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
}

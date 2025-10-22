import { IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateSessionDto {
    @IsString()
    consultantId: string;

    @IsString()
    clientId: string;

    @IsDateString()
    startTime: string;

    @IsOptional()
    @IsDateString()
    endTime?: string;
}
import { PartialType } from '@nestjs/mapped-types';
import { CreateSessionDto } from './create-session.dto';
import { IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdateSessionDto extends PartialType(CreateSessionDto) {
    @IsOptional()
    @IsString()
    status?: string;

    @IsOptional()
    @IsDateString()
    endTime?: string;
}
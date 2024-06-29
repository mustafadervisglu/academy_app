import {
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
  IsNumber,
  IsBoolean,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { ProgramTypes } from 'src/modules/program/constant/type.enum';

export class SearchEventDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: 'Event name for search' })
  readonly name?: string;

  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  @ApiPropertyOptional({
    description: 'Start date for search',
    type: 'string',
    format: 'date-time',
  })
  readonly startDate?: Date;

  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  @ApiPropertyOptional({
    description: 'End date for search',
    type: 'string',
    format: 'date-time',
  })
  readonly endDate?: Date;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ description: 'Capacity for search' })
  readonly capacity?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({
    description: 'Expected participants number for search',
  })
  readonly expectedParticipants?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ description: 'Actual participants number for search' })
  readonly actualParticipants?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: 'Category for search' })
  readonly category?: string;

  @IsOptional()
  @IsEnum(ProgramTypes)
  @ApiPropertyOptional({
    description: 'Event type for search',
    enum: ProgramTypes,
  })
  readonly eventType?: ProgramTypes;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ description: 'Status for search' })
  readonly status?: boolean;
}

import {
  IsOptional,
  IsString,
  IsUUID,
  IsDate,
  IsEnum,
  Min,
  IsInt,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  ProgramTypes,
  SchoolTypeLevel,
} from 'src/modules/program/constant/type.enum';

export class SearchProgramDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Program id',
    required: false,
  })
  @IsOptional()
  @IsUUID()
  readonly id?: string;

  @ApiProperty({
    example: 'Summer Camp',
    description: 'Program name',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly name?: string;

  @ApiProperty({
    example: '2024-07-01',
    description: 'Program start date',
    required: false,
  })
  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  readonly startDate?: Date;

  @ApiProperty({
    example: '2024-08-01',
    description: 'Program end date',
    required: false,
  })
  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  readonly endDate?: Date;

  @ApiProperty({
    example: ProgramTypes.Other,
    description: 'Program type',
    enum: ProgramTypes,
    required: false,
  })
  @IsOptional()
  @IsEnum(ProgramTypes)
  readonly type?: ProgramTypes;

  @ApiProperty({
    example: 30,
    description: 'Program capacity',
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  readonly capacity?: number;

  @ApiProperty({
    example: SchoolTypeLevel.Other,
    description: 'School type level',
    enum: SchoolTypeLevel,
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly schoolTypeLevel?: SchoolTypeLevel;

  @ApiProperty({
    example: 'Maths',
    description: 'Branch info',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly branchInfo?: string;
}

import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsEnum,
} from 'class-validator';
import {
  ProgramTypes,
  SchoolTypeLevel,
} from 'src/modules/program/constant/type.enum';
import { Type } from 'class-transformer';

export class UpdateProgramDto {
  @ApiProperty({ example: 'Program Name', description: 'Programın Name' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    example: 'Program Description',
    description: 'Program Description',
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({
    example: '2024-01-01',
    description: 'Program start date',
    type: Date,
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  startDate: Date;

  @ApiProperty({
    example: '2024-12-31',
    description: 'Program end date',
    type: Date,
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  endDate: Date;

  @ApiProperty({ example: 100, description: 'quota of the program' })
  @IsNumber()
  @IsOptional()
  capacity: number;

  @ApiProperty({ example: 'math', description: 'Branch information' })
  @IsString()
  @IsOptional()
  branchInfo: string;
}

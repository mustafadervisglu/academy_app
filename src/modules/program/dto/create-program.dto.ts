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

export class CreateProgramDto {
  @ApiProperty({ example: 'Program Name', description: 'Programın Name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Program Description',
    description: 'Program Description',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: '2024-01-01',
    description: 'Program start date',
    type: Date,
  })
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @ApiProperty({
    example: '2024-12-31',
    description: 'Program end date',
    type: Date,
  })
  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @ApiProperty({
    example: ProgramTypes.FaceToFace,
    description: 'Program Type',
    enum: ProgramTypes,
  })
  @IsEnum(ProgramTypes)
  type: ProgramTypes;

  @ApiProperty({ example: 100, description: 'quota of the program' })
  @IsNumber()
  @IsOptional()
  capacity: number;

  @ApiProperty({
    example: SchoolTypeLevel.Middle,
    description: 'school Type Level',
    enum: SchoolTypeLevel,
  })
  @IsEnum(SchoolTypeLevel)
  schoolTypeLevel: SchoolTypeLevel;

  @ApiProperty({ example: 'math', description: 'Branch information' })
  @IsString()
  @IsOptional()
  branchInfo: string;
}

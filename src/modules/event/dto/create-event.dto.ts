import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';
import { EventStatus } from 'src/modules/event/constant/type.enum';

export class CreateEventDto {
  @ApiProperty({ example: 'Event Name', description: 'Event Name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'event description',
    description: 'event description',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: '2024-01-01',
    description: 'event start date',
    type: Date,
  })
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @ApiProperty({
    example: '2024-01-02',
    description: 'event end date',
    type: Date,
  })
  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @ApiProperty({
    example: 'educator responsibilities',
    description: 'educator responsibilities',
  })
  @IsString()
  @IsNotEmpty()
  educatorResponsibilities: string;

  @ApiProperty({ example: 50, description: 'capacity' })
  @IsNumber()
  @IsOptional()
  capacity: number;

  @ApiProperty({ example: 30, description: 'expected participants' })
  @IsNumber()
  @IsOptional()
  expectedParticipants: number;

  @ApiProperty({ example: 25, description: 'actual participants' })
  @IsNumber()
  @IsOptional()
  actualParticipants: number;

  @ApiProperty({ example: '12345', description: 'integration code' })
  @IsString()
  @IsOptional()
  integrationCode: string;

  @ApiProperty({ example: 'category', description: 'category' })
  @IsString()
  @IsOptional()
  category: string;

  @ApiProperty({ example: EventStatus.YAYINDA, description: 'status' })
  @IsString()
  @IsOptional()
  status: EventStatus;

  @ApiProperty({
    example: 'relatedDocument.pdf',
    description: 'related document of the event',
  })
  @IsString()
  @IsOptional()
  relatedDocument: string;

  @ApiProperty({
    example: ['userId1', 'userId2'],
    description: 'user ids',
  })
  @IsArray()
  @IsOptional()
  userIds: string[];
}

import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { EventStatus } from 'src/modules/event/constant/type.enum';
import { User } from 'src/modules/user/entities/user.entity';

export class UpdateEventDto {
  @ApiProperty({ example: 'Event Name', description: 'Event Name' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    example: 'event description',
    description: 'event description',
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({
    example: '2024-01-01',
    description: 'event start date',
    type: Date,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  startDate: Date;

  @ApiProperty({
    example: '2024-01-02',
    description: 'event end date',
    type: Date,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  endDate: Date;

  @ApiProperty({
    example: 'Mehmet Akif Ersoy',
    description: 'Educators of the event',
  })
  @IsOptional()
  educators: User[];

  @ApiProperty({
    example: 'educator responsibilities',
    description: 'educator responsibilities',
  })
  @IsString()
  @IsOptional()
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

  @ApiProperty({ example: 'category', description: 'category' })
  @IsString()
  @IsOptional()
  category: string;

  @ApiProperty({ example: 'end', description: 'status' })
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

  @IsOptional()
  @IsString()
  userId: string;
}

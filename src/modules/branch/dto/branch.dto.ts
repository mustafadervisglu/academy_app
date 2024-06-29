import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class BranchDto {
  @ApiProperty({
    example: 'Computer Science',
    description: 'The name of the branch',
  })
  @IsString()
  branchName: string;
}

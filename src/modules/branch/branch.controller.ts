import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BranchService } from 'src/modules/branch/branch.service';
import { Branch } from 'src/modules/branch/entities/branch.entity';
import { BranchDto } from 'src/modules/branch/dto/branch.dto';

@ApiTags('branch')
@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Post('add')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The branch has been successfully created.',
    type: Branch,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request.' })
  async addBranch(@Body() branchDto: BranchDto): Promise<Branch> {
    try {
      return await this.branchService.addBranch(branchDto);
    } catch (error) {
      throw new HttpException(
        'Failed to create branch',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('addMultiple')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The branches have been successfully created.',
    type: [Branch],
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request.' })
  async addMultipleBranch(@Body() branchDto: BranchDto[]): Promise<Branch[]> {
    try {
      return await this.branchService.addMultipleBranch(branchDto);
    } catch (error) {
      throw new HttpException(
        'Failed to create branches',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

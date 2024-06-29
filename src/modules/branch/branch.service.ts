import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Branch } from 'src/modules/branch/entities/branch.entity';
import { BranchDto } from 'src/modules/branch/dto/branch.dto';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch) private branchRepository: Repository<Branch>,
  ) {}

  async addBranch(branchDto: BranchDto): Promise<Branch> {
    let newBranch = new Branch();
    newBranch.branchName = branchDto.branchName;
    return await this.branchRepository.save(newBranch);
  }

  async addMultipleBranch(branchNames: BranchDto[]): Promise<Branch[]> {
    const newBranches = branchNames.map((branchDto: BranchDto) => {
      const newBranch = new Branch();
      newBranch.branchName = branchDto.branchName;
      return newBranch;
    });
    return await this.branchRepository.save(newBranches);
  }
}

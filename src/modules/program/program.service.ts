import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProgramDto } from 'src/modules/program/dto/create-program.dto';
import { PaginationDto } from 'src/modules/user/dto/pagination.dto';
import { SearchProgramDto } from 'src/modules/program/dto/search-program.dto';
import { ProgramEntity } from 'src/modules/program/entity/program.entity';
import { UpdateProgramDto } from 'src/modules/program/dto/update-program.dto';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(ProgramEntity)
    private programRepository: Repository<ProgramEntity>,
  ) {}

  async createProgram(
    createProgramDto: CreateProgramDto,
  ): Promise<ProgramEntity> {
    const isExist = await this.programRepository.findOne({
      where: { name: createProgramDto.name },
    });
    if (isExist) {
      throw new HttpException('Program already exists', 400);
    }
    if (createProgramDto.startDate > createProgramDto.endDate) {
      throw new HttpException('Start date should be less than end date', 400);
    }
    const program = this.programRepository.create(createProgramDto);
    return await this.programRepository.save(program);
  }

  async getAllPrograms(paginationDto: PaginationDto): Promise<ProgramEntity[]> {
    const { limit, page } = paginationDto;
    const offset = (page - 1) * limit;
    return await this.programRepository.find({
      relations: ['events'],
      skip: offset,
      take: limit,
    });
  }

  async deleteProgram(id: string): Promise<ProgramEntity> {
    try {
      const program = await this.programRepository.findOne({
        where: { id: id },
        relations: ['events'],
      });
      if (!program) {
        throw new HttpException('Program not found', 404);
      }
      await this.programRepository.softRemove(program);
      return program;
    } catch (e) {
      throw new HttpException('Program not found', 404);
    }
  }

  async searchPrograms(
    search: SearchProgramDto,
    paginationDto: PaginationDto,
  ): Promise<any> {
    const { limit, page } = paginationDto;
    const offset = (page - 1) * limit;
    const {
      id,
      name,
      type,
      startDate,
      endDate,
      capacity,
      schoolTypeLevel,
      branchInfo,
    } = search;

    const queryBuilder = this.programRepository
      .createQueryBuilder('program')
      .leftJoinAndSelect('program.events', 'event')
      .skip(offset)
      .take(limit);

    if (id) queryBuilder.andWhere('program.id = :id', { id });
    if (name)
      queryBuilder.andWhere('program.name LIKE :name', { name: `%${name}%` });
    if (type) queryBuilder.andWhere('program.type = :type', { type });
    if (startDate)
      queryBuilder.andWhere('program.startDate >= :startDate', { startDate });
    if (endDate)
      queryBuilder.andWhere('program.endDate <= :endDate', { endDate });
    if (capacity)
      queryBuilder.andWhere('program.capacity = :capacity', { capacity });
    if (schoolTypeLevel)
      queryBuilder.andWhere('program.schoolTypeLevel = :schoolTypeLevel', {
        schoolTypeLevel,
      });
    if (branchInfo)
      queryBuilder.andWhere('program.branchInfo LIKE :branchInfo', {
        branchInfo: `%${branchInfo}%`,
      });

    return await queryBuilder.getMany();
  }

  async updateProgram(
    updateDto: UpdateProgramDto,
    id: string,
  ): Promise<ProgramEntity> {
    const program = await this.programRepository.findOne({
      where: { id },
    });
    if (!program) {
      throw new HttpException('Program not found', 404);
    }
    if (updateDto.startDate > updateDto.endDate) {
      throw new HttpException('Start date should be less than end date', 400);
    }
    await this.programRepository.update({ id }, updateDto);
    return await this.programRepository.findOne({
      where: { id },
    });
  }
}

import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from 'src/modules/event/entity/event.entity';
import { CreateEventDto } from 'src/modules/event/dto/create-event.dto';
import { ProgramEntity } from 'src/modules/program/entity/program.entity';
import { PaginationDto } from 'src/modules/user/dto/pagination.dto';
import { SearchEventDto } from 'src/modules/event/dto/search-event.dto';
import { UpdateEventDto } from 'src/modules/event/dto/update-event.dto';
import { User } from 'src/modules/user/entities/user.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private eventRepository: Repository<EventEntity>,
    @InjectRepository(ProgramEntity)
    private programRepository: Repository<ProgramEntity>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createEvent(
    programId: string,
    createEventDto: CreateEventDto,
  ): Promise<ProgramEntity> {
    const program = await this.programRepository.findOne({
      where: { id: programId },
      relations: ['events'],
    });

    let event = await this.eventRepository.findOne({
      where: { name: createEventDto.name },
    });
    const users = [];
    for (const userId of createEventDto.userIds) {
      const user = await this.usersRepository.findOne({
        where: { id: userId },
      });
      if (!user) throw new HttpException('User not found', 404);
      users.push(user);
    }

    if (event) {
      throw new HttpException('Event already exists', 400);
    }

    if (!program) {
      throw new HttpException('Program not found', 404);
    }
    if (createEventDto.startDate > createEventDto.endDate) {
      throw new HttpException('Start date should be less than end date', 400);
    }
    event = this.eventRepository.create(createEventDto);
    event.educators = users;
    event.eventType = program.type;
    await this.eventRepository.save(event);
    program.events.push(event);
    return await this.programRepository.save(program);
  }

  async deleteEvent(eventId: string): Promise<ProgramEntity> {
    try {
      const event = await this.eventRepository.findOne({
        where: { id: eventId },
        relations: ['program'],
      });

      if (!event) {
        throw new HttpException('Event not found', 404);
      }
      await this.eventRepository.softRemove(event);
      return this.programRepository.findOne({
        where: { id: event.program.id },
      });
    } catch (e) {
      throw new HttpException(e, 404);
    }
  }

  async getAllEvents(paginationDto: PaginationDto): Promise<EventEntity[]> {
    const { limit, page } = paginationDto;
    const offset = (page - 1) * limit;
    return await this.eventRepository.find({
      relations: ['program', 'educators'],
      skip: offset,
      take: limit,
    });
  }

  async searchEvents(
    search: SearchEventDto,
    paginationDto: PaginationDto,
  ): Promise<any> {
    const { limit, page } = paginationDto;
    const offset = (page - 1) * limit;
    const {
      name,
      eventType,
      startDate,
      endDate,
      capacity,
      expectedParticipants,
      actualParticipants,
      category,
      status,
    } = search;
    const queryBuilder = this.eventRepository
      .createQueryBuilder('event')
      .leftJoin('event.program', 'program')
      .addSelect('program.name')
      .skip(offset)
      .take(limit);
    if (name)
      queryBuilder.andWhere('event.name LIKE :name', { name: `%${name}%` });
    if (eventType)
      queryBuilder.andWhere('event.eventType = :eventType', { eventType });
    if (startDate)
      queryBuilder.andWhere('event.startDate >= :startDate', { startDate });
    if (endDate)
      queryBuilder.andWhere('event.endDate <= :endDate', { endDate });
    if (capacity)
      queryBuilder.andWhere('event.capacity = :capacity', { capacity });
    if (expectedParticipants)
      queryBuilder.andWhere(
        'event.expectedParticipants = :expectedParticipants',
        { expectedParticipants },
      );
    if (actualParticipants)
      queryBuilder.andWhere('event.actualParticipants = :actualParticipants', {
        actualParticipants,
      });
    if (category)
      queryBuilder.andWhere('event.category = :category', { category });
    if (status) queryBuilder.andWhere('event.status = :status', { status });
    return await queryBuilder.getMany();
  }

  async updateEvent(
    eventId: string,
    updateEventDto: UpdateEventDto,
  ): Promise<EventEntity> {
    try {
      const event = await this.eventRepository.findOne({
        where: { id: eventId },
      });

      if (!event) {
        throw new HttpException('Event not found', 404);
      }
      if (updateEventDto.startDate > updateEventDto.endDate) {
        throw new HttpException('Start date should be less than end date', 400);
      }
      await this.eventRepository.update(eventId, updateEventDto);
      return await this.eventRepository.findOne({
        where: { id: eventId },
      });
    } catch (e) {
      throw new HttpException(e, 404);
    }
  }
}

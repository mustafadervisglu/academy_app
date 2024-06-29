import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { EventService } from 'src/modules/event/event.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEventDto } from 'src/modules/event/dto/create-event.dto';
import { ProgramEntity } from 'src/modules/program/entity/program.entity';
import { PaginationDto } from 'src/modules/user/dto/pagination.dto';
import { SearchEventDto } from 'src/modules/event/dto/search-event.dto';
import { UpdateEventDto } from 'src/modules/event/dto/update-event.dto';

@ApiTags('event')
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Event added to program successfully.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Program not found.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
  })
  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Add an event to a program' })
  @Post('/:programId')
  async createEvent(
    @Param('programId') programId: string,
    @Body() createEventDto: CreateEventDto,
  ): Promise<ProgramEntity> {
    try {
      return await this.eventService.createEvent(programId, createEventDto);
    } catch (e) {
      throw new HttpException(e.message, e.status || HttpStatus.BAD_REQUEST);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Event deleted successfully.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Event not found.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
  })
  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Remove an event from a program' })
  @Delete('/:id')
  async deleteEvent(@Param('id') eventId: string): Promise<ProgramEntity> {
    try {
      return await this.eventService.deleteEvent(eventId);
    } catch (e) {
      throw new HttpException(e.message, e.status || HttpStatus.BAD_REQUEST);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All events retrieved successfully.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
  })
  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all events' })
  @Get()
  async getAllEvents(@Query() paginationDto: PaginationDto): Promise<any> {
    try {
      return await this.eventService.getAllEvents(paginationDto);
    } catch (e) {
      throw new HttpException(e.message, e.status || HttpStatus.BAD_REQUEST);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Event search successful.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
  })
  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Search for events' })
  @Get('/search')
  async searchEvents(
    @Query() search: SearchEventDto,
    @Query() paginationDto: PaginationDto,
  ): Promise<any> {
    try {
      return await this.eventService.searchEvents(search, paginationDto);
    } catch (e) {
      throw new HttpException(e.message, e.status || HttpStatus.BAD_REQUEST);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Event updated successfully.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Event not found.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
  })
  // @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update an event' })
  @Put('/:id')
  async updateEvent(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<any> {
    try {
      return await this.eventService.updateEvent(id, updateEventDto);
    } catch (e) {
      throw new HttpException(e.message, e.status || HttpStatus.BAD_REQUEST);
    }
  }
}

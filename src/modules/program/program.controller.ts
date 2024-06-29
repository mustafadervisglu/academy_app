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
  UseGuards,
} from '@nestjs/common';
import { ProgramService } from 'src/modules/program/program.service';
import { CreateProgramDto } from 'src/modules/program/dto/create-program.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { PaginationDto } from 'src/modules/user/dto/pagination.dto';
import { CreateEventDto } from 'src/modules/event/dto/create-event.dto';
import { SearchProgramDto } from 'src/modules/program/dto/search-program.dto';
import { ProgramEntity } from 'src/modules/program/entity/program.entity';
import { UpdateProgramDto } from 'src/modules/program/dto/update-program.dto';

@ApiTags('program')
@Controller('program')
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Program registration successful.',
    type: [ProgramEntity],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Program already exists.',
    type: [ProgramEntity],
  })
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create a new program' })
  @Post()
  async createProgram(
    @Body() createProgramDto: CreateProgramDto,
  ): Promise<ProgramEntity> {
    try {
      return await this.programService.createProgram(createProgramDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All programs retrieved successfully.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
  })
  @HttpCode(HttpStatus.OK)
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Retrieve all programs' })
  @Get()
  async getAllUsers(
    @Query() paginationDto: PaginationDto,
  ): Promise<ProgramEntity[]> {
    try {
      return await this.programService.getAllPrograms(paginationDto);
    } catch (e) {
      throw new HttpException(e.message, e.status || HttpStatus.BAD_REQUEST);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Program deletion successful.',
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
  @ApiOperation({ summary: 'Delete a program by ID' })
  @Delete('/:id')
  async deleteProgram(@Param('id') id: string): Promise<ProgramEntity> {
    try {
      return await this.programService.deleteProgram(id);
    } catch (e) {
      throw new HttpException(e.message, e.status || HttpStatus.BAD_REQUEST);
    }
  }

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Programs retrieved successfully.',
    type: [ProgramEntity],
  })
  @ApiOperation({ summary: 'Find Programs' })
  @Get('/search')
  async searchPrograms(
    @Query() search: SearchProgramDto,
    @Query() paginationDto: PaginationDto,
  ): Promise<any> {
    return await this.programService.searchPrograms(search, paginationDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Programs updated successfully.',
    type: [ProgramEntity],
  })
  @ApiOperation({ summary: 'update program' })
  @Put('/:id')
  async updateProgram(
    @Param('id') id: string,
    @Body() updateProgramDto: UpdateProgramDto,
  ): Promise<ProgramEntity> {
    try {
      return await this.programService.updateProgram(updateProgramDto, id);
    } catch (e) {
      throw new HttpException(e.message, e.status || HttpStatus.BAD_REQUEST);
    }
  }
}

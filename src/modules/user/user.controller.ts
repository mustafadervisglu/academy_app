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
  Req,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { User } from 'src/modules/user/entities/user.entity';
import { UserService } from 'src/modules/user/user.service';
import { CreateUserDto } from 'src/modules/user/dto/user.dto';
import { PaginationDto } from 'src/modules/user/dto/pagination.dto';
import { UpdateUserDto } from 'src/modules/user/dto/update-user.dto';
import { SearchUsersDto } from 'src/modules/user/dto/searchUser.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly usersService: UserService,
    @InjectQueue('userQueue') private userQueue: Queue,
  ) {}

  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Retrieve the logged-in user profile' })
  @Get('me')
  // Retrieves the profile of the logged-in user
  async getProfile(@Req() req): Promise<User> {
    // Returns the user from the request object. JwtAuthGuard adds the user to the request.
    return this.usersService.findByUsername(req.user.username);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User registration successful.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'User already exists.',
  })
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create a new user' })
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.usersService.createUser(createUserDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User deletion successful.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
  })
  @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a user by ID' })
  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    try {
      return await this.usersService.deleteUser(id);
    } catch (e) {
      throw new HttpException(e.message, e.status || HttpStatus.BAD_REQUEST);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All users retrieved successfully.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
  })
  @HttpCode(HttpStatus.OK)
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Retrieve all users' })
  @Get()
  async getAllUser(@Query() paginationDto: PaginationDto): Promise<User[]> {
    try {
      return await this.usersService.getAllUser(paginationDto);
    } catch (e) {
      throw new HttpException(e.message, e.status || HttpStatus.BAD_REQUEST);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User updated successfully.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
  })
  @ApiBearerAuth('access-token')
  // @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update a user by ID' })
  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: UpdateUserDto,
  ): Promise<User> {
    try {
      return await this.usersService.updateUser(id, body);
    } catch (e) {
      throw new HttpException(e.message, e.status || HttpStatus.BAD_REQUEST);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User search completed successfully.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
  })
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Search for users' })
  @Get('search')
  async searchUser(
    @Query() searchUserDto: SearchUsersDto,
    @Query() paginationDto: PaginationDto,
  ): Promise<User[]> {
    try {
      return await this.usersService.searchUser(searchUserDto, paginationDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User were successfully added to the queue.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request. Invalid input data.',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error. Could not process the request.',
  })
  @ApiOperation({ summary: 'Add multiple users in bulk' })
  @Post('bulk')
  async addBulkUser(
    @Body() createUserDtos: CreateUserDto[],
  ): Promise<{ message: string }> {
    try {
      const jobs = createUserDtos.map((userDto) => ({
        name: 'addUser',
        data: userDto,
      }));
      await this.userQueue.addBulk(jobs);
      return { message: 'User added to the queue' };
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  //**testing tckno validation**//
  // @Post('validate-tckn')
  // @HttpCode(HttpStatus.OK)
  // async validateTckn(@Body() body: any): Promise<{ isValid: boolean }> {
  //   body.name;
  //   const isValid = await this.usersService.validateTckn(
  //     body.tckn,
  //     body.name,
  //     body.lastName,
  //     body.birthYear,
  //   );
  //   console.log(body.name, body.lastName, body.tckn, body.birthYear);
  //   console.log(isValid);
  //   return { isValid };
  // }
}

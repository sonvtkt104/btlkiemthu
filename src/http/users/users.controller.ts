import { Body, Controller, Get, Post, Query, Request, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private Service: UsersService){}

    @Post('create')
    async createUser(@Request() req, @Body() data) {
        return this.Service.createUser(data);
    }

    @Get('get')
    async getUser(@Query() req) {
        return this.Service.getUser(req);
    }

    @Put('update')
    async updateUser(@Body() data) {
        return this.Service.updateUser(data);
    }

    @Delete('delete')
    async deleteUser(@Body() data) {
        return this.Service.deleteUser(data);
    }

    @Get('get-all')
    async getAllUsers(@Query() req) {
        return this.Service.getAllUsers(req);
    }
}

import { Body, ConsoleLogger, Controller, Get, Param, Post, Query, Req, Res, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe } from '@nestjs/common';
import { Response, Request } from 'express';
import { createUserDto } from 'src/users/dtos/createUser.dto';

@Controller('users')
export class UsersController {

    // Get 
    // Query Params
    @Get()
    getUsers(@Query('sortBy') sortBy: string, @Query('flag', ParseBoolPipe) flag: boolean){
        console.log(sortBy, flag)
        return {username: 'Mukul'};
    }

    @Get('posts')
    getUsersPosts() {
        return [{
            username: 'totla', email: 'mukultotla4@gmail.com', posts: [
                {id: '1'}, 
                {id:'2'}
            ]
        }]
    }

    // Post
    @Post('create')
    // createUser(@Req() request: Request, @Res() response: Response){
    //     console.log(request.body);
    //     response.send('Created');
    // }
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: createUserDto){
        console.log(userData);
        return {}
    }

    @Get(':id')
    //  getUserById(@Req() request: Request, @Res() response: Response){
    //     console.log(request.params);
    //     response.send('')
    getUserById(@Param('id', ParseIntPipe) id:number){
        console.log(id)
        return { id }
    }

    @Get(':id/:name')
    getUserByIdName(@Param('id') id:string, @Param('name') name:string){
        console.log(id, name)
        return { id, name }
    }
}

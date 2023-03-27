import { Body, ConsoleLogger, Controller, Get, Param, Post, Query, Req, Res, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe, HttpException, HttpStatus } from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    // Get 
    // Query Params
    @Get()
    getUsers(){
        return this.userService.fetchUsers();
    }
    // getUsers(@Query('sortBy') sortBy: string, @Query('flag', ParseBoolPipe) flag: boolean){
    //     console.log(sortBy, flag)
    //     return this.userService.fetchUsers();
    // }


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
        return this.userService.createUser(userData);
    }

    @Get(':id')
    //  getUserById(@Req() request: Request, @Res() response: Response){
    //     console.log(request.params);
    //     response.send('')
    getUserById(@Param('id', ParseIntPipe) id:number){
        const user = this.userService.fetchUserById(id);
        if(!user){
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
        }
        return user;
    }

    @Get(':id/:name')
    getUserByIdName(@Param('id') id:string, @Param('name') name:string){
        console.log(id, name)
        return { id, name }
    }
}

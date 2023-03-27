import { Injectable } from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/createUser.dto';

@Injectable()
export class UsersService {
    private fakeUser = [{username: 'Mukul', email: 'mukul@gmail.com'},
                         {username: 'John', email: 'johndoe@gmail.com'}
                        ];
    fetchUsers(){
        return this.fakeUser;
    }

    createUser(userDetails: createUserDto){
        this.fakeUser.push(userDetails);
        return;
    }

    fetchUserById(id: number){
        // Search in array/db with the id
        return { id, name: 'mukul', email: 'mukul@gmail.com'};
    }
}

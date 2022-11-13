import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Users } from 'src/entitys/users';

@Injectable()
export class UsersService {
    constructor(private connection: Connection){}

    async createUser(data: any): Promise<any> {
        try {
            if(!data?.shop_id || !data?.username || !data?.password || !data?.email || !data?.name) {
                return 0
            }
            var jwt = require('jsonwebtoken');
            let access_token = jwt.sign(data?.username, process.env.JWT_SECRET_KEY);

            let time = new Date().getTime()/1000;
            
            let values = {
                shop_id: data?.shop_id,
                username: data?.username,
                password: btoa(data?.password),
                email: data?.email,
                name: data?.name,
                access_token: access_token,
                created_at: time,
                updated_at: time
            }
            console.log(values);
            let res = await this.connection.createQueryBuilder()
                .insert()
                .into(Users)
                .values(values)
                .execute();

            if(res) {
                return 1
            } else return 0
        } catch (error) {
            return 0
        }
    }
    
    async getUser(req: any): Promise<any> {
       try {
            console.log(req)
            var jwt = require('jsonwebtoken');

            let access_token = req?.access_token
            var username = jwt.verify(access_token, process.env.JWT_SECRET_KEY);
            console.log(username)

            let res = await this.connection
                .createQueryBuilder()
                .select(["username", "email", "name"])
                .from(Users, 'users')
                .where('username=:username',{username:username})
                .execute();
            return res; 
        } catch (error) {
                return error
        }
    }

    async updateUser(data: any): Promise<any> {
        try {
            console.log(data)

            let res = await this.connection
                .createQueryBuilder()
                .update(Users)
                .where('access_token=:access_token',{access_token:data?.access_token})
                .set(data)
                .execute();
            if(res) {
                return {
                    status: 'done',
                    data: 1
                }
            } else {
                return {
                    status: 'fail',
                    data: 0
                }
            }; 
        } catch (error) {
                return error
        }
    }

    async deleteUser(data: any): Promise<any> {
        try {
            console.log(data)

            let res = await this.connection
                .createQueryBuilder()
                .delete()
                .from(Users)
                .where('access_token=:access_token',{access_token:data?.access_token})
                .execute();
            if(res) {
                return {
                    status: 'done',
                    data: 1
                }
            } else {
                return {
                    status: 'fail',
                    data: 0
                }
            }; 
        } catch (error) {
                return error
        }
    }

    async getAllUsers(req: any): Promise<any> {
        try {
            let res = await this.connection
                .createQueryBuilder()
                .select(["*"])
                .from(Users, 'users')
                .execute();
            return res; 
        } catch (error) {
                return error
        }
    }
}

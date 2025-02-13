import UserQuery from "./user_query.js";

export default class UserServicer{
    public userQuery: UserQuery;
    constructor(){
        this.userQuery = new UserQuery();
    }

    public async getUser(){
        return await this.userQuery.getUser();
    }

    public async getUserById(user_id: number){
        return await this.userQuery.getUserById(user_id);
    }

    public async createUser(payload: {username: string, email: string, password: string}){
        return await this.userQuery.createUser(payload);
    }

    public async updateUser(payload: {user_id: number, username: string, email: string, password: string}){
        return await this.userQuery.updateUser(payload);
    }
    public async deleteUser(user_id: number){
        return await this.userQuery.deleteUser(user_id);
    }

    public async usersWithPostCount(){
        console.log("from service");

        return await this.userQuery.usersWithPostCount();
    }
}
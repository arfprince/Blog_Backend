import User from "#models/user";

export default class AuthQuery{
    public async login(email: string){
        return await User.query().where('email', email).first();
    }
    public async register(payload: {username: string, email: string, password: string}){
        await User.create(payload);
        return {message: "User registration successfull"}
    }
    public async getUsers(){ 
        return await User.query();
    }
    public async createUser(payload: {username: string, email: string, password: string}){  
        return await User.verifyCredentials(payload.email, payload.password)
    }
}
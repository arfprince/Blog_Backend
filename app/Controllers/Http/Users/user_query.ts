import User from "#models/user";

export default class UserQuery{
    public async getUser(){ 
        return await User.query();
    }   

    public async getUserById(user_id: number){
        return await User.query().where('user_id', user_id).first();
    }

    public async createUser(payload: {username: string, email: string, password: string}){
        return await User.create(payload);
    }

    public async updateUser(payload: {user_id: number, username: string, email: string, password: string}){
        return await User.query().where('user_id', payload.user_id).update(payload);
    }

    public async deleteUser(user_id: number){
        return await User.query().where('user_id', user_id).delete();
    }

    public async usersWithPostCount(){
        const users = await User.query()
        .select('user_id', 'username') 
        .withCount('post') 
        .orderBy('post_count', 'desc');
        return users;
    }
}
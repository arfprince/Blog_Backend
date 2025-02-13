import ProfileQuery from "./profile_query.js";

export default class ProfileService{
    public profileQuery: ProfileQuery;  
    constructor(){
        this.profileQuery = new ProfileQuery();
    }

    // public async getBlogByUser(user_id: number){
    //     return await this.profileQuery.getBlogByUser(user_id);
    // }
    // public async getBlogById(blog_id: number){
    //     return await this.profileQuery.getBlogById(blog_id);
    // }
    public async createBlog(payload: {userId: number, username: string, status: 'pubic' | 'private', content: string, title: string, readTime: number, imageUrl: string}){
        return await this.profileQuery.createBlog(payload);
    }
}
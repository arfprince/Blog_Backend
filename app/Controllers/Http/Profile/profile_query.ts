import Blog from "#models/blogs";

export default class ProfileQuery {

    // public async getBlogByUser(user_id: number){
    //     return await Blog.query().where('userId', user_id);
    // }
    // public async getBlogById(blog_id: number){
    //     return await Blog.query().where('id', blog_id).first();
    // }
    public async createBlog(payload: {userId: number, username: string, status: 'pubic' | 'private', content: string, title: string, readTime: number, imageUrl: string}){
        return await Blog.create(payload);
    }

} 
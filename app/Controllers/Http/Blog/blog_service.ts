import BlogQuery from "./blog_query.js";

export default class BlogService{
    public blogQuery: BlogQuery;  
    constructor(){
        this.blogQuery = new BlogQuery();
    }

    public async getBlogByUserId(user_id: number){
        return await this.blogQuery.getBlogByUserId(user_id);
    }
    public async deleteBlog(blog_id: number){
        return await this.blogQuery.deleteBlog(blog_id);
    }
    public async createBlog(payload: {userId: number, username: string, status: 'pubic' | 'private', content: string, title: string, readTime: number, imageUrl: string}){
        return await this.blogQuery.createBlog(payload);
    }
    public async getBlogs(){
        return await this.blogQuery.getBlogs();
    }
    public async updateBlogStatus(blog_id: number, status: string){
        return await this.blogQuery.updateBlogStatus(blog_id, status);
    }
    public async updateBlog(blog_id: number, title: string, content: string, imageUrl: string){
        return await this.blogQuery.updateBlog(blog_id, title, content, imageUrl);
    }
}
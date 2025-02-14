
import BlogService from "./blog_service.js";
import { BlogCreateVAlidation } from "./blog_validator.js";

export default class BlogController {
    public blogService : BlogService;
    constructor(){
        this.blogService = new BlogService();
    }

    public async getBlogByUserId({request, response}: { request: any, response: any }){
        const user_id = request.all().user_id;
        const blogs = await this.blogService.getBlogByUserId(user_id);
        return response.status(200).json(blogs);
    }
    public async deleteBlog({request,response}: { request: any, response: any }){
       try {
        const blog_id = request.all().id;
        await this.blogService.deleteBlog(blog_id);
        return response.status(200).json({message: "Blog Deleted successfully"});
       } catch (error) {
            return response.status(400).json({ error: error.message });
       }
    }
    public async createBlog({request, response}: { request: any, response: any }) {
        try {
            const payload = await request.validateUsing(BlogCreateVAlidation);
            await this.blogService.createBlog(payload);
            return response.status(200).json({ message: "New blog created to your profile" });
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    public async getBlogs({response}: { response: any }){
        const blogs = await this.blogService.getBlogs();
        return response.status(200).json(blogs);
    }
    public async updateBlogStatus({request,response}:{request: any, response: any}){
        try {
            const blog_id = request.all().id;
            const status = request.all().status;
            await this.blogService.updateBlogStatus(blog_id, status);
            return response.status(200).json({ message: "Blog status updated successfully" });
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    public async updateBlog({request,response}:{request: any, response: any}){
        try {
            const blog_id = request.all().id;
            const title = request.all().title;
            const content = request.all().content;
            const imageUrl= request.all().imageUrl;
            await this.blogService.updateBlog(blog_id,title,content,imageUrl);
            return response.status(200).json({ message: "Blog updated successfully" });
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}
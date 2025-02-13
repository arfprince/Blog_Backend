
import ProfileService from "./profile_service.js";
import { BlogCreateVAlidation } from "./profile_validator.js";

export default class ProfileController {
    public profileService : ProfileService;
    constructor(){
        this.profileService = new ProfileService();
    }

    // public async getBlogByUser(ctx){
    //     const user_id = ctx.params.id;
    //     const blog = await this.profileService.getBlogByUser(user_id);
    //     ctx.response.status(200).json(blog);
    // }
    // public async getBlogById(ctx){
    //     const blog_id = ctx.params.id;
    //     const blog = await this.profileService.getBlogById(blog_id);
    //     ctx.response.status(200).json(blog);
    // }
    public async createBlog({request, response}: { request: any, response: any }){
        console.log(request.all());

        const payload = await request.validateUsing(BlogCreateVAlidation);
        
        await this.profileService.createBlog(payload);
        return response.status(200).json({messages: "New blog created to your profile"});
    }
}
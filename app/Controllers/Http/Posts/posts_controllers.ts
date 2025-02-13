import PostService from "./posts_service.js";
import { HttpContext } from '@adonisjs/core/http'
import { CreateValidation, DeleteValidation, UpdateValidation } from "./posts_validations.js";


export default class PostControllers{
    public postService: PostService;
    constructor(){
        this.postService = new PostService();
    }

    public async getPosts({response}: HttpContext){
        const post = await this.postService.getPost();
        return response.status(200).json(post);
    }

    public async createPost({request}: { request: HttpContext['request'] }){
        const payload = await request.validateUsing(CreateValidation);
        return await this.postService.createPost(payload);
    }
    public async deletePost({request}: { request: HttpContext['request'] }){
        const payload = await request.validateUsing(DeleteValidation);
        return await this.postService.deletePost(payload.user_id, payload.post_id);
    }

    public async updatePost({request}: { request: HttpContext['request'] }){
        const payload = await request.validateUsing(UpdateValidation);
        return await this.postService.updatePost(payload.user_id, payload.post_id, {content: payload.content});
    }

    public async postsWithEverything({response}: HttpContext){
        const post = await this.postService.postsWithEverything();
        return response.status(200).json(post);
    }
}
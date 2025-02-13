import CommentService from "./comment_service.js";
import { HttpContext } from '@adonisjs/core/http'
import { CreateValidation, PostIdVAlidation } from "./comment_validation.js";

export default class CommentControllers {
    public commentService: CommentService;
    constructor() {
        this.commentService = new CommentService();
    }

    public async getComments({ response }: HttpContext) {
        const comment = await this.commentService.getComment();
        return response.status(200).json(comment);
    }

    public async createComment({ request,response }: HttpContext) {
        const payload = await request.validateUsing(CreateValidation);
        console.log("from controller :", payload);
        const comment = await this.commentService.createComment(payload);
        return response.status(200).json({message: 'Comment created successfully', comment});
    }

    public async deleteComment({ request, response }: HttpContext) {
        const { user_id, comment_id } = request.all();
        const comment = await this.commentService.deleteComment(user_id, comment_id);
        return response.status(200).json({ message: comment });
    }

    public async updateComment({ request, response }: HttpContext) {
        const { user_id, comment_id, content } = request.all();
        const comment = await this.commentService.updateComment(user_id, comment_id, { content });
        return response.status(200).json({ message: comment });
    }
    public async allCommentsByPostId({ request, response }: { request: HttpContext['request'], response: HttpContext['response'] }) {
        const payload = await request.validateUsing(PostIdVAlidation);        
        const data = await this.commentService.allCommentsByPostId(payload.post_id);
        return response.status(200).json({ message: data });
    }
}
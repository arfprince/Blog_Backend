
import CommentQuery from './comment_query.js';

export default class CommentService{
    public commentQuery: CommentQuery;
    constructor(){
        this.commentQuery = new CommentQuery();
    }

    public async getComment(){
        return await this.commentQuery.getComment();
    }
    
    public async createComment(payload: {user_id: number, post_id: number, content: string}){
        return await this.commentQuery.createComment(payload);        
    }

    public async deleteComment(user_id: number, comment_id: number){
        const comment = await this.commentQuery.getCommentByUserId(user_id);
        for (const c of comment) {
            if (c.comment_id === comment_id) {
                await this.commentQuery.deleteComment(comment_id);
                return 'Comment deleted successfully';
            }
        }
        return 'Unauthorized: You can only delete your own comments';
    }

    public async updateComment(user_id: number, comment_id: number, payload: {content: string}){
        const comment = await this.commentQuery.getCommentByUserId(user_id);
        for (const c of comment) {
            if (c.comment_id === comment_id) {
                await this.commentQuery.updateComment(comment_id, payload);
                return 'Comment updated successfully';
            }
        }
        return 'Unauthorized: You can only update your own comments';
    }

    public async allCommentsByPostId(post_id: number){
        return await this.commentQuery.allCommentsByPostId(post_id);
    }
}
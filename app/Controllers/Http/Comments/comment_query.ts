import Comment from "#models/comment";

export default class CommentQuery{
    public async getComment(){ 
        return await Comment.query();
    }   
    public async createComment(payload: {user_id: number, post_id: number, content: string}){
        return await Comment.create(payload);
    }

    public async getCommentByUserId(user_id: number){
        return await Comment.query().where('user_id', user_id);
    }
    public async deleteComment(comment_id: number){
        return await Comment.query().where('comment_id', comment_id).delete();
    }
    public async updateComment(comment_id: number, payload: {content: string}){
        return await Comment.query().where('comment_id', comment_id).update(payload);
    }

    public async allCommentsByPostId(post_id: number){
        const data = await Comment.query()
            .select('content','user_id')
            .preload('user', (userQuery) => {
                userQuery.select('username as author_name');
              })
            .withCount('reactions')
            .where('post_id', post_id);
      return data;
    }
}
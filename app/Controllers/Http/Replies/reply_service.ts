import ReplyQuery from "./reply_query.js"

export default class ReplyService{
    public replyQuery: ReplyQuery;
    constructor(){
        this.replyQuery = new ReplyQuery();
    }

    public async getReply(){
        return await this.replyQuery.getReply();
    }
    public async createReply(payload: {comment_id: number, user_id: number, content: string}){
        return await this.replyQuery.createReply(payload);        
    }

    public async deleteReply(user_id: number, reply_id: number){
        const reply = await this.replyQuery.getReplyByUserId(user_id);
        for (const r of reply) {
            if (r.reply_id === reply_id) {
                await this.replyQuery.deleteReply(reply_id);
                return 'Reply deleted successfully';
            }
        }
        return 'Unauthorized: You can only delete your own reply';
    }

    public async updateReply(payload: {reply_id: number, user_id:number, content: string}){
        const reply = await this.replyQuery.getReplyByUserId(payload.user_id);
        for (const r of reply) {
            if (r.reply_id === payload.reply_id) {
                await this.replyQuery.updateReply(payload.reply_id, payload.content);
                return 'Reply updated successfully';
            }
        }
        return 'Unauthorized: You can only update your own reply';
    }
}
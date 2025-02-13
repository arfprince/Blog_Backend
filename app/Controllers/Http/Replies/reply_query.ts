import Reply from "#models/reply";

export default class ReplyQuery{
    public async getReply(){ 
        return await Reply.query();
    }   
    public async createReply(payload: {comment_id: number, user_id: number, content: string}){
        return await Reply.create(payload);
    }

    public async getReplyByUserId(user_id: number){
        return await Reply.query().where('user_id', user_id);
    }
    public async deleteReply(reply_id: number){
        return await Reply.query().where('reply_id', reply_id).delete();
    }
    public async updateReply(reply_id: number, content: string){
        return await Reply.query().where('reply_id', reply_id).update({content});
    }
}
import Reaction from "#models/reaction";

export default class ReactionQuery{
    public async getReaction(){ 
        return await Reaction.query();
    }   

    public async createReaction(payload: {user_id: number, type:number, post_id: number,comment_id: number,reply_id: number}){
        return await Reaction.create(payload);
    }

    public async getReactionByUserId(user_id: number){
        return await Reaction.query().where('user_id', user_id);
    }
    public async deleteReaction(reaction_id: number){
        return await Reaction.query().where('reaction_id', reaction_id).delete();
    }

    public async updateReaction(reaction_id: number, type: number){
        return await Reaction.query().where('reaction_id', reaction_id).update({type});
    }
}
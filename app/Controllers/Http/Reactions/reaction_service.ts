import ReactionQuery from "./reaction_query.js";

export default class ReactionService{
    public reactionQuery: ReactionQuery;
    constructor(){
        this.reactionQuery = new ReactionQuery();
    }

    public async getReaction(){
        return await this.reactionQuery.getReaction();
    }

    public async createReaction(payload: {user_id: number, type:number, post_id: number,comment_id: number,reply_id: number}){
        return await this.reactionQuery.createReaction(payload);
    }

    public async deleteReaction(reaction_id: number){
        await this.reactionQuery.deleteReaction(reaction_id);
        return "message: Reaction removed";
    }

    public async updateReaction(reaction_id: number, type: number){
        await this.reactionQuery.updateReaction(reaction_id, type);
        return "message: Reaction updated";
    }
}
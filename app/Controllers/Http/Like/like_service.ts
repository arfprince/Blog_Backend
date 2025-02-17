import LikeQuery from "./like_query.js";

export default class LikeService {
    public likeQuery: LikeQuery;
    constructor(){
        this.likeQuery = new LikeQuery();
    }

    public async addToLike(payload: {blog_id: number, user_id: number}){
        return await this.likeQuery.addToLike(payload);
    }
    public async removeFromLike(payload: {blog_id: number, user_id: number}){
        return await this.likeQuery.removeFromLike(payload);
    }
    public async getLikesByUserId(payload: {user_id: number}){
        return await this.likeQuery.getLikesByUserId(payload);
    }
}
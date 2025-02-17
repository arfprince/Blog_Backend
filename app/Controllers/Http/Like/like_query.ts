import Like from "#models/likes";

export default class LikeQuery {
    // implementation for adding a blog to favourites
    public async addToLike(payload: {blog_id: number, user_id: number}){
       return await Like.create(payload);
    }
    public async removeFromLike(payload: {blog_id: number, user_id: number}){
        return await Like.query().delete().where('blog_id', payload.blog_id).where('user_id', payload.user_id);    
    }
    public async getLikesByUserId(payload: {user_id: number}){
        return await Like.query().where('user_id', payload.user_id);
    }

    public async getLikeByUserId(payload: {user_id: number}){
        return await Like.query().where('user_id', payload.user_id).first();
    }
}

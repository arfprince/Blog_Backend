import FavouriteQuery from "./favourite_query.js";

export default class FavouriteService{
    public favouriteQuery: FavouriteQuery;
    constructor(){
        this.favouriteQuery = new FavouriteQuery();
    }
    public async getFavouritesByUserId(user_id: number){
        return await this.favouriteQuery.getFavouritesByUserId(user_id);
    }
    public async addToFavourite(payload: {blog_id: number, user_id: number}){
        return await this.favouriteQuery.addToFavourite(payload);
    }
    public async removeFromFavourite(payload: {blog_id: number, user_id: number}){
        return await this.favouriteQuery.removeFromFavourite(payload);

    }
}
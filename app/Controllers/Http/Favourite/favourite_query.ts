import Favourite from "#models/favourites";

export default class FavouriteQuery {

    public async getFavouritesByUserId(user_id: number) {
        return await Favourite.query().where('user_id', user_id);
    }

    public async addToFavourite(payload: { blog_id: number, user_id: number }) {
        return await Favourite.create(payload);
    }

    public async removeFromFavourite(payload: { blog_id: number, user_id: number }) {
        return await Favourite.query().delete().where('blog_id', payload.blog_id).where('user_id', payload.user_id);
    }
}
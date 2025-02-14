import FavouriteService from "./favourite_service.js";
import { addToFavouriteValidate, getFavouritesByUserIdValidate, removeFromFavouriteValidate } from "./favourite_validator.js";

export default class FavouriteController{
    public favouriteService : FavouriteService
    constructor(){
        this.favouriteService = new FavouriteService();
    }
    public async getFavouritesByUserId({request, response}: { request: any, response: any }){
        try{
            const payload = await request.validateUsing(getFavouritesByUserIdValidate);
            console.log(payload);
            
            const favourites = await this.favouriteService.getFavouritesByUserId(payload.user_id);
            response.status(200).json(favourites);
        } catch (error) {
            response.status(500).json({ message: "An error occurred" });
        }
    }
    
    public async addToFAvourite({request, response}: { request: any, response: any }){
        try{
            const payload = await request.validateUsing(addToFavouriteValidate)
            await this.favouriteService.addToFavourite(payload);
            response.status(200).json({ message: "Product added to favourites" });
        }
        catch(error) {
            response.status(500).json({ message: "An error occurred" });
        }
    }

    public async removeFromFavourite({request, response}: { request: any, response: any }){
        try{
            const payload = await request.validateUsing(removeFromFavouriteValidate)
            await this.favouriteService.removeFromFavourite(payload);
            response.status(200).json({ message: "Product added to favourites" });
        }
        catch(error) {
            response.status(500).json({ message: "An error occurred" });
        }
    }
}
import LikeService from "./like_service.js";
import { AddToLikeValidation, GetLikesByUserIdValidation } from "./like_validator.js";
export default class LikeController{
    public likeService : LikeService;
    constructor(){
        this.likeService = new LikeService();
    }
    public async addToLike({request, response}: { request: any, response: any }){
        try {
            const payload= await request.validateUsing(AddToLikeValidation);
            const res = await this.likeService.addToLike(payload);

            return response.status(200).json(res);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    public async removeFromLike({request, response}: { request: any, response: any }){
        try {
            const payload= await request.validateUsing(AddToLikeValidation);
            const res = await this.likeService.removeFromLike(payload);

            return response.status(200).json(res);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    public async getLikesByUserId({request, response}: { request: any, response: any }){
        try {
            const payload= await request.validateUsing(GetLikesByUserIdValidation);
            const res = await this.likeService.getLikesByUserId(payload);

            return response.status(200).json(res);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}
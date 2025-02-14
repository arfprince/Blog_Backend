import router from "@adonisjs/core/services/router";
import FavouriteController from "./favourite_controller.js";
import { middleware } from "#start/kernel";

router.group(()=>{
    router.post('/add_to_favourite', [FavouriteController, 'addToFAvourite']).use(middleware.auth({ guards: ['web'] }))
    router.post('/get_user_favourite_blogs', [FavouriteController, 'getFavouritesByUserId']).use(middleware.auth({ guards: ['web'] }))
    router.post('/remove_from_favourite', [FavouriteController, 'removeFromFavourite']).use(middleware.auth({ guards: ['web'] }))



}).prefix('/blog')
import router from "@adonisjs/core/services/router";

import { middleware } from "#start/kernel";
import LikeController from "./like_controller.js";

router.group(()=>{
    router.post('/add_to_like', [LikeController, 'addToLike']).use(middleware.auth({ guards: ['web'] }))
    router.post('/get_user_liked_blogs', [LikeController, 'getLikesByUserId']).use(middleware.auth({ guards: ['web'] }))
    router.post('/remove_from_like', [LikeController, 'removeFromLike']).use(middleware.auth({ guards: ['web'] }))
    
}).prefix('/blog')
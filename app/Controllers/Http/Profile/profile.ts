import router from "@adonisjs/core/services/router";
import ProfileController from "./profile_controller.js";
import { middleware } from "#start/kernel";

router
  .group(() => {
    
    router.post('/create_blog', [ProfileController, 'createBlog']).use(middleware.auth({ guards: ['web'] }))
  })
  .prefix('/blog')

import router from "@adonisjs/core/services/router";
import BlogController from "./blog_controller.js";
import { middleware } from "#start/kernel";

router
  .group(() => {
    
    router.post('/create_blog', [BlogController, 'createBlog']).use(middleware.auth({ guards: ['web'] }))
    router.get('/get_blogs', [BlogController, 'getBlogs'])
    router.post('/get_blog_by_user_id', [BlogController, 'getBlogByUserId']).use(middleware.auth({ guards: ['web'] }))
    router.post('/delete_blog', [BlogController, 'deleteBlog']).use(middleware.auth({ guards: ['web'] }))
    router.post('/update_blog_status', [BlogController, 'updateBlogStatus']).use(middleware.auth({ guards: ['web'] }))
    router.post('/update_blog', [BlogController, 'updateBlog']).use(middleware.auth({ guards: ['web'] }))
    router.post('/get_favourites', [BlogController, 'getFavourites']).use(middleware.auth({ guards: ['web'] }))
    router.post('/update_like', [BlogController, 'updateLike']).use(middleware.auth({ guards: ['web'] }))
    router.post('/get_likes', [BlogController, 'getLikes']).use(middleware.auth({ guards: ['web'] }))
    router.post('/get_blog_by_blog_id', [BlogController, 'getBlogByBlogId']).use(middleware.auth({ guards: ['web'] }))
    
  })
  .prefix('/blog')

import router from "@adonisjs/core/services/router";
import PostControllers from "./posts_controllers.js";

router.get("/api/posts", [PostControllers,"getPosts"]);
router.post("/api/posts/delete", [PostControllers,"deletePost"]);
router.post("/api/posts/create", [PostControllers,"createPost"]);
router.post("/api/posts/update", [PostControllers,"updatePost"]);

router.get("/api/posts/posts_with_everything", [PostControllers, "postsWithEverything"]);
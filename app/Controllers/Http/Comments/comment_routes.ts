import router from "@adonisjs/core/services/router";
import CommentControllers from "./comment_controllers.js";

router.get('/api/comments', [CommentControllers,'getComments']);
router.post('/api/comments/create', [CommentControllers,'createComment']);
router.post('/api/comments/delete', [CommentControllers,'deleteComment']);
router.post('/api/comments/update', [CommentControllers,'updateComment']);

router.get('/api/comments/all_comments_by_post_id',[CommentControllers,"allCommentsByPostId"])

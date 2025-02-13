import router from "@adonisjs/core/services/router";
import ReplyControllers from "./reply_controllers.js";

router.get('/api/replies', [ReplyControllers,'getReply']);
router.post('/api/replies/create', [ReplyControllers,'createReply']);
router.post('/api/replies/delete', [ReplyControllers,'deleteReply']);
router.post('/api/replies/update', [ReplyControllers,'updateReply']);    
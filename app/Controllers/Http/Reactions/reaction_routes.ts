import router from "@adonisjs/core/services/router";
import ReactionControllers from "./reaction_controllers.js";


router.get('/api/reactions', [ReactionControllers,'getReaction']);
router.post('/api/reactions/create', [ReactionControllers,'createReaction']);
router.post('/api/reactions/delete', [ReactionControllers,'deleteReaction']);
router.post('/api/reactions/update', [ReactionControllers,'updateReaction']);
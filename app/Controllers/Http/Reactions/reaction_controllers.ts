import ReactionService from './reaction_service.js'
import { HttpContext } from '@adonisjs/core/http'
import { CreateValidation, UpdateValidation } from './reaction_validation.js'



export default class ReactionControllers {
  public reactionService: ReactionService
  constructor() {
    this.reactionService = new ReactionService()
  }

  public async getReaction({ response }: HttpContext) {
    const user = await this.reactionService.getReaction()
    return response.status(200).json(user)
  }
  public async createReaction({ request, response }: HttpContext) {
    const payload = await request.validateUsing(CreateValidation) as { user_id: number, type: number, post_id: number, comment_id: number, reply_id: number }
    const user = await this.reactionService.createReaction(payload)
    return response.status(200).json(user)
  }
  public async deleteReaction({ request, response }: HttpContext) {  
    const payload = await this.reactionService.deleteReaction(request.all().reaction_id)
    return response.status(200).json(payload)
  }

  public async updateReaction({ request, response }: HttpContext) {
    const payload = await request.validateUsing(UpdateValidation)
    await this.reactionService.updateReaction(payload.reaction_id, payload.type)
    return response.status(200).json(payload)
  }
}

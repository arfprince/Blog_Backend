import ReplyService from "./reply_service.js";
import { HttpContext } from '@adonisjs/core/http';
import { CreateValidation, UpdateValidation } from "./reply_validation.js";

export default class ReplyControllers {
  public replyService: ReplyService;
  constructor() {
    this.replyService = new ReplyService();
  }

  public async getReply({ response }: HttpContext) {
    const reply = await this.replyService.getReply();
    return response.status(200).json(reply);
  }

  public async createReply({ request, response }: HttpContext) {
    const payload = await request.validateUsing(CreateValidation);
    const reply = await this.replyService.createReply(payload);
    return response.status(200).json({ message: 'Reply created successfully', reply });
  }
  public async deleteReply({ request, response }: HttpContext) {
    const { user_id, reply_id } = request.all();
    const reply = await this.replyService.deleteReply(user_id, reply_id);
    return response.status(200).json({ message: reply });
  }
  
  public async updateReply({ request, response }: HttpContext) {
    const payload= await request.validateUsing(UpdateValidation);
    const comment = await this.replyService.updateReply(payload);
    return response.status(200).json({ message: comment });
  }
}
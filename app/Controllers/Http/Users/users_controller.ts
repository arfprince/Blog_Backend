import UserServicer from './users_service.js'
import { HttpContext } from '@adonisjs/core/http'
import {
  createUserValidation,
  getUserByIdValidation,
  updateUserValidation,
} from './users_validator.js'

export default class UserControllers {
  public userService: UserServicer
  constructor() {
    this.userService = new UserServicer()
  }

  public async getUserById({ response, request }: HttpContext) {
    const payload = await request.validateUsing(getUserByIdValidation)
    const user = await this.userService.getUserById(payload.user_id)
    return response.status(200).json(user)
  }
  public async getUsers({ response }: HttpContext) {
    const users = await this.userService.getUser()
    return response.status(200).json(users)
  }

  public async createUser({ request }: HttpContext) {
    const payload = await request.validateUsing(createUserValidation)
    return await this.userService.createUser(payload)
  }

  public async updateUser({ request, response }: HttpContext) {
    const payload = await request.validateUsing(updateUserValidation)
    await this.userService.updateUser(
      payload as { user_id: number; username: string; email: string; password: string }
    )
    return response.status(200).json({ message: 'User updated successfully', data: payload })
  }

  public async deleteUser({ request }: HttpContext) {
    return await this.userService.deleteUser(request.all().user_id)
  }
  public async usersWithPostCount({ response }: HttpContext) {
    const users = await this.userService.usersWithPostCount()
    return response.status(200).json(users)
  }
}

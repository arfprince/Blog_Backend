import { HttpContext } from '@adonisjs/core/http'
import { CreateValidation, LoginVAlidation } from './auth_validator.js'
import AuthService from './auth_service.js'

export default class AuthController {
  public authService: AuthService
  constructor() {
    this.authService = new AuthService()
  }

  public async register({ response, request }: HttpContext) {
    const payload = await request.validateUsing(CreateValidation)
    const res = await this.authService.register(payload)
    if ('error' in res) {
      return response.status(400).json(res)
    } else {
      return response.status(200).json(res)
    }
  }
  public async login({ auth, response, request }: HttpContext) {
    const payload = await request.validateUsing(LoginVAlidation)
    const user = await this.authService.login(payload)
    if ('message' in user) {
      return response.status(400).json(user)
    }
    await auth.use('web').login(user, !!request.input('remember_me'))
    return response.status(200).json({user, message: 'Logged in successfully'})
  } 

  public async logout({ auth, response }: HttpContext) {
    try {
      // console.log("Auth state before logout:", auth.use('web').isAuthenticated);
      await auth.use('web').logout();
      return response.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
      return response.status(500).json({ message: "Logout failed", error: error.message });
    } 
  } 
  public async is_loggeduser({ auth, response }: HttpContext) {
    const user = auth.use('web').user;
    if (!user) {
      return response.status(404).json('User not logged in')
    }
    return user;
  }
}

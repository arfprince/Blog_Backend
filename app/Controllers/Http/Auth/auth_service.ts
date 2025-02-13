import hash from '@adonisjs/core/services/hash'
import AuthQuery from './auth_query.js'

export default class AuthService {
  public authQuery: AuthQuery
  constructor() {
    this.authQuery = new AuthQuery()
  }

  public async register(payload: { username: string; email: string; password: string }) {
    const users = await this.authQuery.getUsers();
    for(const user of users) {
      if(user.username === payload.username){
        return {error: "username already taken"}
      }
      if(user.email === payload.email){
        return {error: "An Account already registered with this emnil"}
      }
    }
    const res = await this.authQuery.register(payload);
    return res;
  }

  public async login(payload: { email: string; password: string }) {
    const user = await this.authQuery.login(payload.email)
    if (!user) {
      return { message: 'User not found' }
    }
    const isPasswordValid = await hash.verify(user.password, payload.password)
    if (!isPasswordValid) {
      return { message: 'Invalid credentials' }
    }
    return user
  }
}

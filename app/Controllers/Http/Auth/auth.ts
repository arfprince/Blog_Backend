import router from '@adonisjs/core/services/router'
import AuthController from './auth_controller.js'
import { middleware } from '#start/kernel'

router
  .group(() => {
    router.post('/login', [AuthController, 'login'])
    router.post('/register', [AuthController, 'register'])
    router.post('/logout', [AuthController, 'logout']).use(middleware.auth({ guards: ['web'] }))
    router
      .get('/is-logged-user', [AuthController, 'is_loggeduser'])
      .use(middleware.auth({ guards: ['web'] }))
  })
  .prefix('/blog')

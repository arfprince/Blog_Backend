import router from '@adonisjs/core/services/router'
import UserControllers from './users_controller.js'

router.get('/api/user/', [UserControllers, 'getUserById'])
router.get('/api/users', [UserControllers, 'getUsers'])

router.post('/api/users/add', [UserControllers, 'createUser'])
router.post('/api/users/update', [UserControllers, 'updateUser'])
router.post('/api/users/delete', [UserControllers, 'deleteUser'])

router.get('/api/users/users_with_post_count', [UserControllers, 'usersWithPostCount'])

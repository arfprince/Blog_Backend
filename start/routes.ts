/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import "../app/Controllers/Http/Auth/auth.js"
import "../app/Controllers/Http/Blog/blog.js"
import "../app/Controllers/Http/Like/like.js"
import "../app/Controllers/Http/Favourite/favourite.js"
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

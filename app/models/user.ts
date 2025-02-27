import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbRememberMeTokensProvider } from '@adonisjs/auth/session'
import Favourite from './favourites.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Blog from './blogs.js'
import Like from './likes.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  static rememberMeTokens = DbRememberMeTokensProvider.forModel(User)
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime


  @hasMany(() => Favourite,{
    foreignKey: 'user_id',
    localKey: 'id',
  })
  declare favourite: HasMany<typeof Favourite>

  @hasMany(() => Blog,{
    foreignKey: 'user_id',
    localKey: 'id',
  })
  declare blog: HasMany<typeof Blog>

  @hasMany(() => Like,{
    foreignKey: 'user_id',
    localKey: 'id',
  })
  declare like: HasMany<typeof Like>
}
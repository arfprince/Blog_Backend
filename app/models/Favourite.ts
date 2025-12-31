import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './User.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Blog from './Blog.js'
import { DateTime } from 'luxon'

export default class Favourite extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare blog_id: number

  @column()
  declare user_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'user_id',
    localKey: 'user_id',
  })
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Blog, {
    foreignKey: 'blog_id',
    localKey: 'id',
  })
  declare blog: BelongsTo<typeof Blog>
}

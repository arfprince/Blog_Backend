import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Blog from './blogs.js'
import User from './user.js'

export default class Like extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare blog_id: number

  @column()
  declare user_id: number

  @column()
  declare like_count: number

  @belongsTo(() => Blog,{
    foreignKey: 'blog_id',
    localKey: 'blog_id',
  })
  declare blog: BelongsTo<typeof Blog>

  @belongsTo(() => User,{
    foreignKey: 'user_id',
    localKey: 'user_id',
  })
  declare User: BelongsTo<typeof User>
}


import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Blog from './blogs.js'

export default class Favourite extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare blog_id: number

  @column()
  declare user_id: number

  @belongsTo(() => User,{
    foreignKey: 'user_id',
    localKey: 'user_id',
  })
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Blog,{
    foreignKey: 'blog_id',
    localKey: 'id',
  })
  declare blog: BelongsTo<typeof Blog>

}

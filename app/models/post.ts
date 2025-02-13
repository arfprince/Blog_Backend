import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Comment from './comment.js'
import User from './user.js'
import Reaction from './reaction.js'

export default class Post extends BaseModel {
  serializeExtras = true; 

  @column({ isPrimary: true })
  declare post_id: number

  @column()
  declare user_id: number

  @column()
  declare content: string

  @hasMany(() => Comment,{
    foreignKey: 'post_id'
  })
  declare comments: HasMany<typeof Comment>

  @hasMany(() => Reaction, {
    foreignKey: 'post_id'
  })
  declare reactions: HasMany<typeof Reaction>

  @belongsTo(() => User, {
    foreignKey: 'user_id',
    localKey: 'user_id'
  })
  declare user: BelongsTo<typeof User>
}

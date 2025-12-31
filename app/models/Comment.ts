import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Post from './Post.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Reply from './Reply.js'
import Reaction from './Reaction.js'
import User from './User.js'
import { DateTime } from 'luxon'

export default class Comment extends BaseModel {
  serializeExtras = true

  @column({ isPrimary: true })
  declare comment_id: number

  @column()
  declare user_id: number

  @column()
  declare post_id: number

  @column()
  declare content: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Post, {
    foreignKey: 'post_id',
  })
  declare posts: BelongsTo<typeof Post>

  @hasMany(() => Reply, {
    foreignKey: 'comment_id',
  })
  declare replies: HasMany<typeof Reply>

  @hasMany(() => Reaction, {
    foreignKey: 'comment_id',
  })
  declare reactions: HasMany<typeof Reaction>

  @belongsTo(() => User, {
    foreignKey: 'user_id',
    localKey: 'user_id',
  })
  declare user: BelongsTo<typeof User>
}

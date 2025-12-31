import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Comment from './Comment.js'
import Reaction from './Reaction.js'
import { DateTime } from 'luxon'

export default class Reply extends BaseModel {
  serializeExtras = true

  @column({ isPrimary: true })
  declare reply_id: number

  @column()
  declare user_id: number

  @column()
  declare comment_id: number

  @column()
  declare content: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true })    
  declare updatedAt: DateTime

  @belongsTo(() => Comment, {
    foreignKey: 'comment_id',
  })
  declare comment: BelongsTo<typeof Comment>

  @hasMany(() => Reaction, {
    foreignKey: 'reply_id',
  })
  declare reactions: HasMany<typeof Reaction>
}

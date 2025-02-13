import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Comment from './comment.js'
import Reaction from './reaction.js';

export default class Reply extends BaseModel {
  serializeExtras = true; 

  @column({ isPrimary: true })
  declare reply_id: number

  @column()
  declare user_id: number

  @column()
  declare comment_id: number

  @column()
  declare content: string

  @belongsTo(() => Comment,{
    foreignKey: 'comment_id'
  })
  declare comment: BelongsTo<typeof Comment>

  @hasMany(()=> Reaction,{
    foreignKey:'reply_id'
  })
  declare reactions: HasMany<typeof Reaction>
}
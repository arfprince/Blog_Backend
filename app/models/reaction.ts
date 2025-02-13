import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations';
import Post from './post.js';
import Comment from './comment.js';
import Reply from './reply.js';
export default class Reaction extends BaseModel {
  serializeExtras = true; 

  @column({ isPrimary: true })
  declare reaction_id: number

  @column()
  declare user_id: number

  @column()
  declare type: number

  @column()
  declare post_id: number

  @column()
  declare comment_id: number

  @column()
  declare reply_id: number

  @belongsTo (()=> Post,{
    foreignKey: 'post_id'
  })
  declare post: BelongsTo<typeof Post>

  @belongsTo(()=> Comment,{
    foreignKey: 'comment_id'
  })
  declare comment: BelongsTo<typeof Comment>

  @belongsTo(()=> Reply,{
    foreignKey:'reply_id'
  })
  declare reply: BelongsTo<typeof Reply>
}
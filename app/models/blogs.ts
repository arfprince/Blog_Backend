import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Like from './likes.js'
import Favourite from './favourites.js'
import User from './user.js'

export default class Blog extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare username: string

  @column()
  declare status: 'pubic' | 'private'

  @column()
  declare title: string
  
  @column()
  declare content: string

  @column()
  declare readTime: number 

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true })
  declare updatedAt: DateTime

  @column()
  declare imageUrl: string

  @column()
  declare likeCount: number

  @belongsTo(() => User,{
    foreignKey: 'user_id',
    localKey: 'user_Id',
  })
  declare User: BelongsTo<typeof User>


  @hasMany(() => Like,{
    foreignKey: 'blog_id',
    localKey: 'id',
  })
  declare like: HasMany<typeof Like>

  @hasMany(() => Favourite,{
    foreignKey: 'blog_id',
    localKey: 'id',
  })
  declare favourite: HasMany<typeof Favourite>

}

//has many -> parent table er LK(column) child table e je name e ache oitai Fk(column).
//belomgs to -> parent table er LK  child table e je name e ache oita FK.  parent table er LK ekhaneo Lk. 

import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Reaction from './reaction.js'
import Comment from './comment.js'
import User from './user.js'

export default class Post extends BaseModel {
  serializeExtras = true
  @column({ isPrimary: true })
  declare id: number

  // Foreign key referring to users.id (shows which user created the post)
  @column()
  declare user_id: number | null

  @column()
  declare content: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  // Relationships

  // 🔗 Each post belongs to one user.
  // posts.user_id refers to users.id
  @belongsTo(() => User, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  declare user: BelongsTo<typeof User>

  // 🔗 A post can have many reactions.
  // reactions.entity_id refers to posts.id
  @hasMany(() => Reaction, {
    localKey: 'id',
    foreignKey: 'entity_id',
  })
  declare reactions: HasMany<typeof Reaction>

  // 🔗 A post can have many comments.
  // comments.post_id refers to posts.id
  @hasMany(() => Comment, {
    localKey: 'id',
    foreignKey: 'post_id',
  })
  declare comments: HasMany<typeof Comment>
}


import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Post from './post.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Comment from './comment.js'
import Reply from './reply.js'
import Reaction from './reaction.js'

// const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
//   uids: ['email'],
//   passwordColumnName: 'password',
// })

export default class User extends BaseModel {
  serializeExtras = true
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string | null

  @column()
  declare email: string

  @column({ serializeAs: null }) // Password (hidden from API responses)
  declare password: string

  // Relationships

  // one to many relationship
  // 🔗 One user can have many posts.
  // posts.user_id refers to users.id
  @hasMany(() => Post, {
    foreignKey: 'user_id',
  })
  declare posts: HasMany<typeof Post>

  // 🔗 One user can write many comments.
  // comments.user_id refers to users.id
  @hasMany(() => Comment, {
    foreignKey: 'user_id',
  })
  declare comments: HasMany<typeof Comment>

  // 🔗 One user can post many replies.
  // replies.user_id refers to users.id
  @hasMany(() => Reply, {
    foreignKey: 'user_id',
  })
  declare replies: HasMany<typeof Reply>

  // �� One user can react to many entities.
  // reactions.user_id refers to users.id
  @hasMany(() => Reaction, {
    foreignKey: 'user_id',
  })
  declare reactions: HasMany<typeof Reaction>
}


import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Post from './post.js'
import Reply from './reply.js'
import Reaction from './reaction.js'

export default class Comment extends BaseModel {
  serializeExtras = true
  @column({ isPrimary: true })
  declare id: number

  // Foreign key linking the comment to a post
  @column()
  declare post_id: number

  @column()
  declare user_id: number

  @column()
  declare content: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  // Relationships
  // 🔗 Each comment belongs to one user.
  // comments.user_id refers to users.id
  @belongsTo(() => User, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  declare user: BelongsTo<typeof User>

  // 🔗 Each comment belongs to one post.
  // comments.post_id refers to posts.id
  @belongsTo(() => Post, {
    foreignKey: 'post_id',
    localKey: 'id',
  })
  declare post: BelongsTo<typeof Post>

  // 🔗 A comment can have many replies.
  // replies.comment_id refers to comments.id
  @hasMany(() => Reply, {
    localKey: 'id',
    foreignKey: 'comment_id',
  })
  declare replies: HasMany<typeof Reply>

  // 🔗 A comment can have many reactions.
  // reactions.entity_id refers to comments.id
  @hasMany(() => Reaction, {
    foreignKey: 'entity_id',
  })
  declare reactions: HasMany<typeof Reaction>
}


import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Comment from './comment.js'
import Reaction from './reaction.js'

export default class Reply extends BaseModel {
  serializeExtras = true
  @column({ isPrimary: true })
  declare id: number

  // Foreign key linking the reply to a specific comment.
  @column()
  declare comment_id: number

  // Foreign key linking the reply to the user who made it.
  @column()
  declare user_id: number

  @column()
  declare content: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  // Relationships

  // 🔗 Each reply belongs to one user.
  // replies.user_id refers to users.id
  @belongsTo(() => User, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  declare user: BelongsTo<typeof User>

  // 🔗 Each reply belongs to one comment.
  // replies.comment_id refers to comments.id
  @belongsTo(() => Comment, {
    foreignKey: 'comment_id',
    localKey: 'id',
  })
  declare comment: BelongsTo<typeof Comment>

  // 🔗 A reply can have many reactions (like, love, etc.).
  // reactions.entity_id refers to replies.id
  @hasMany(() => Reaction, {
    localKey: 'id',
    foreignKey: 'entity_id',
  })
  declare reactions: HasMany<typeof Reaction>
}


import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Reaction extends BaseModel {
  serializeExtras = true
  @column({ isPrimary: true })
  declare id: number

  // Foreign key linking the reaction to the user who reacted.
  @column()
  declare user_id: number

  @column()
  declare entity_type: 'post' | 'comment' | 'reply'

  // Foreign key linking the reaction to the specific entity (post, comment, reply).
  @column()
  declare entity_id: number

  @column()
  declare reaction_type: 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  // Relationships

  // 🔗 Each reaction belongs to one user (the person who reacted).
  // reactions.user_id refers to users.id
  @belongsTo(() => User, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  declare user: BelongsTo<typeof User>
}


🔑 Key Differences Between hasMany and belongsTo
Aspect	hasMany	belongsTo
Definition	One record relates to many others	One record belongs to another
Where is FK?	Foreign key is in the other model	Foreign key is in this model
Example	A user has many posts	A post belongs to a user
Foreign Key	Defined in the related model	Defined in the current model
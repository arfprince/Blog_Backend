import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'reactions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('reaction_id')
      table.integer('user_id').notNullable()
      table.integer('type').notNullable()
      table.integer('post_id').notNullable()
      table.integer('comment_id').notNullable()
      table.integer('reply_id').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
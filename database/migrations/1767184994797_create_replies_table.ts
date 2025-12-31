import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'replies'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('reply_id')
      table.integer('user_id').notNullable()
      table.integer('comment_id').notNullable()
      table.text('content').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
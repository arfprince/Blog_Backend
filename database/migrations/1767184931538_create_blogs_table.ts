import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'blogs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').notNullable()
      table.string('username', 255).notNullable()
      table.string('title', 255).notNullable()
      table.string('content', 255).notNullable()
      table.string('image_url', 255).notNullable()
      table.integer('read_time').notNullable()
      table.boolean('status').notNullable()
      table.integer('like_count').notNullable().defaultTo(0)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
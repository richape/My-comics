export function up(knex) {
  return knex.schema.createTable('comics', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('name')
    table.string('issue')
    table.string('datePublished')
    table.string('publisher')
    table.string('credits')
    table.string('coverArt')
  })
}

export function down(knex) {
  return knex.schema.dropTable('comics')
}

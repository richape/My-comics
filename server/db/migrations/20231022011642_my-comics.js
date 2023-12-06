export function up(knex) {
  return knex.schema.createTable('comics', (table) => {
    table.integer('id').primary()
    table.string('title')
    table.string('name')
    table.string('issue')
    table.string('datePublished')
    table.string('publisher')
    table.string('credits')
    table.string('coverArt')
    table.string('coverArtist')
  })
}

export function down(knex) {
  return knex.schema.dropTable('comics')
}

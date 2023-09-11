/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('abilities').then(function (exists) {
    if (exists) {
      return knex.schema.table('abilities', function (table) {
        table.integer('fk_company')
          .unsigned()
          .references('company_id')
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('abilities').then(function (exists) {
    if (exists) {
      return knex.schema.table('abilities', function (table) {
        table.dropColumn('fk_company')
      })
    }
  })
}

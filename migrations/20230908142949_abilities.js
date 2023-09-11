/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('abilities').then(function (exists){
      if (!exists) {
          return knex.schema.createTable('abilities', function (table) {
              table.increments('ability_id').primary()
              table.string('ability_type').notNullable()
              table.string('ability_name').notNullable()
              table.boolean('active').notNullable().defaultTo(true)
              table.timestamp('created_at').defaultTo(knex.fn.now())
          })
      }
    })
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable("abilities").then(function (exists) {
      if (exists) {
          return knex.schema.dropTable("abilities");
      }
    });
  };;

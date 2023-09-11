/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('companies').then(function (exists){
      if (!exists) {
          return knex.schema.createTable('companies', function (table) {
              table.increments('company_id').primary()
              table.string('name').notNullable()
              table.string('website').notNullable()
              table.string('description').notNullable()
              table.string('email').notNullable().unique()
              table.string('phone').notNullable().unique()
              table.string('direction').notNullable()
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
    return knex.schema.hasTable("companies").then(function (exists) {
      if (exists) {
          return knex.schema.dropTable("companies");
      }
    });
  };;

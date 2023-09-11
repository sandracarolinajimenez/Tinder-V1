const env = process.env.NODE_ENV || 'development'

const knexfile = require('./knexfile.js')
const knex = require('knex')

module.exports = knex(knexfile[env])

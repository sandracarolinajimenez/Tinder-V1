const knex = require('../config.js')

const create = (bodyAbilities) => {
  return knex
    .insert(bodyAbilities)
    .into('abilities')
    .returning(['ability_id', 'ability_type', 'ability_name', 'fk_company', 'active', 'created_at'])
}

const findAll = () => {
  return knex
    .select('*')
    .from('abilities')
    .where({ active: true })
}

const findOne = (abilityId) => {
  return knex
    .select('*')
    .from('abilities')
    .where({ ability_id: abilityId })
    .where({ active: true })
}

const update = (abilityId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('abilities')
    .where({ ability_id: abilityId })
    .returning(['ability_id', 'ability_type', 'ability_name', 'fk_company', 'active', 'created_at'])
}

const destroy = (abilityId) => {
  return knex
    .del()
    .from('abilities')
    .where({ ability_id: abilityId })
}

const softDelete = (abilityId) => {
  return knex
    .update({ active: false })
    .from('abilities')
    .where({ ability_id: abilityId })
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}

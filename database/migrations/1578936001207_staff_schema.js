'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StaffSchema extends Schema {
  up () {
    this.create('staff', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('staff')
  }
}

module.exports = StaffSchema

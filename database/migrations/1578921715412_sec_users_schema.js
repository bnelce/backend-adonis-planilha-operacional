'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SecUsersSchema extends Schema {
  up () {
    this.create('sec_users', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()      
      table.string('login', 8).notNullable().unique()
      table.string('email', 200).notNullable().unique()
      table.string('pswd', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sec_users')
  }
}

module.exports = SecUsersSchema

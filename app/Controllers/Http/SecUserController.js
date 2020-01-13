'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const SecUser = use('App/Models/SecUser')

/**
 * Resourceful controller for interacting with secusers
 */
class SecUserController {
  async login ({ auth, request }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return 'Logged in successfully'
  }
  
  async store ({ request }) {
    const data = request.only(['name', 'email', 'login', 'pswd'])
    const secUser = await SecUser.create(data)
    return secUser
  }

  async index () {
    const secUsers = await SecUser.all()

    return secUsers
  }    

   async show ({ auth, params }) {
    if (auth.secUser.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    return auth.secUser
  }
}

module.exports = SecUserController

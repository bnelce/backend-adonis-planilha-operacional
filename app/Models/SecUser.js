'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')
const crypto = use('crypto')



class SecUser extends Model {

    static boot () {
        super.boot()
    
        /**
         * A hook to hash the user password before saving
         * it to the database.
         */
        this.addHook('beforeSave', async (secUserInstance) => {
          if (secUserInstance.dirty.pswd) {
            //secUserInstance.pswd = await Hash.make(secUserInstance.pswd)
            //Encriptando com MD5
            secUserInstance.pswd = await  crypto
                                            .createHash('md5')
                                            .update(secUserInstance.pswd)
                                            .digest("hex")
          }
        })
      }
    
      /**
       * A relationship on tokens is required for auth to
       * work. Since features like `refreshTokens` or
       * `rememberToken` will be saved inside the
       * tokens table.
       *
       * @method tokens
       *
       * @return {Object}
       */
      tokens () {
        return this.hasMany('App/Models/Token')
      }
  
}

module.exports = SecUser

    


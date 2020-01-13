'use strict'

const User = use("App/Models/SecUser");
const crypto = use('crypto')

class SessionController {
  
  
  async store ({ request, response }) {
    const { login, pswd } = request.all()
    
    console.log(login, pswd)
    
    const user = await User.query().where("login", login).first()
    console.log(user.pswd) 

    const pswdMD5 = await  crypto.createHash('md5').update(pswd).digest("hex")
    console.log(pswdMD5)

    if (pswdMD5 !== user.pswd) {
      return response.status(403).json({
        message: "Senha incorreta",
        user
      });
    }

    return response.send("Usuário e senha corretos")
  }
  
}

module.exports = SessionController
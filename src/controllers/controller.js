//aca se hacen las consultas
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users=require("../../models/usermodel");
const config=require("../../config/config");

exports.register =(req,res) => {
const {username,password}=req.body
const hashedpassword=bcrypt.hashSync(password,8)//hash de la contasrena encripta.
const newUser= {id:users.length+1,username,password:hashedpassword}
users.push(newUser)
const token= jwt.sign({id:newUsers.id},confing.secretkey,{expiresIn:tokenExpiresIn})
res.status(201).send({auth:True,token})
<<<<<<< HEAD


=======
>>>>>>> 711cb3355ddcfff4aeeb49d4c8f7fc90364017aa
}
exports.login=(req,res)=> {
    const {username,password}=req.body
    const user =users.find(u=>u.username===username)
//esta linea busca en posman si el usuario es igual al que tengo almacenado

//arrancamos con verificaciones
if(!user) return res.status(404).send(" user not found")
const passwordInvalid=bcrypt.compareSync(password,user.passwrd)
if(!password) return res.status(404).send({auth:false,token:null})
    const token=jwt.sign({user:user.id},config.secretkey,{expiresIn:tokenExpiresIn})

res.status(200).send({auth:true,token})

}
<<<<<<< HEAD
//habilita el token
=======


>>>>>>> 711cb3355ddcfff4aeeb49d4c8f7fc90364017aa


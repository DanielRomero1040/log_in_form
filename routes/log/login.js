const express = require("express");
const {Router} = express;

const loginRouter =  new Router();

loginRouter.post('/login', (req, res) => {
    const {user,pass}=req.body
    console.log(req.body)
    if (user !== 'daniel' || pass !== 'pass') {
      return res.send("login failed")
    }
    // req.session.usersdb.user = user
    // req.session.usersdb.user.admin = true
    res.sendFile("public/index.html", {root: "."})
   })

module.exports = loginRouter; 
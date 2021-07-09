/* Planning the Server

/ ---> It's working = res
/signin ---> POST = sucess or fail
/register ---> POST = user
/profile/:userId ---> GET = user 
/image ---> PUT (update user object)

*/

import express from "express"
import cors from "cors"
import kenx from "knex"
import bcrypt from "bcrypt"
//server
const app = express()
app.use(cors())
app.use(express.json)

//Database
const db = kenx({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "Wellington",
    database: "postgres",
  },
})

// Root Page
app.get("/", (req, res) => {})
//Signin Page
app.post("/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("Working Sing In!")
  } else {
    res.status(400).json("error to logging in")
  }
})

//Register Page
app.post("/register", (req, res) => {
  const { password, email, name } = req.body
  //hash password
  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hash = bcrypt.hashSync(password, salt)
  //write into the Database
  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        email: email,
      })
      .into("login")
      .returning("email")
      .then(async (loginEmail) => {
        const user = await trx("users").returning("*").insert({
          email: loginEmail[0],
          name: name,
          joined: new Date(),
        })
        res.json(user[0])
      })
      .then(trx.commit)
      .catch(trx.rollback)
  }).catch(() => res.status(400).json("unable to register"))
})

//Profile/:userId Page
app.get("/profile/:id", (req, res) => {
  const { id } = req.params
  let found = false
  database.users.forEach((user) => {
    if (user.id === parseInt(id)) {
      found = true
      return res.json(user)
    }
  })
  if (!found) {
    res.status(400).json("Couldn't find this user")
  }
})

//Image Page
app.post("/image", (req, res) => {
  const { id } = req.body
  let found = false
  database.users.forEach((user) => {
    if (user.id === parseInt(id)) {
      found = true
      user.entries++
      return res.json(user.entries)
    }
  })
  if (!found) {
    res.status(400).json("Couldn't find this user")
  }
  db("users").where("id", "=", id).then()
})

//Listen the Server
app.listen(3000, () => {
  console.log("App is running!!")
})

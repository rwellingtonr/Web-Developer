/* Planning the Server

/ ---> It's working = res
/signin ---> POST = sucess or fail
/register ---> POST = user
/profile/:userId ---> GET = user 
/image ---> PUT (update user object)

*/
// Liberaries
import express from "express"
import cors from "cors"
import kenx from "knex"
import bcrypt from "bcrypt"
//server
const app = express()
app.use(cors())
app.use(express.json())

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
  const { email, password } = req.body

  //Check in the user and the password
  db("login")
    .where("email", "=", email)
    .then(async (data) => {
      const canProceed = bcrypt.compareSync(password, data[0].hash)
      if (canProceed) {
        const user = await db("users").where("email", email)
        return res.json(user[0])
      } else {
        res.status(400).json("Check out you email and password")
      }
    })
    .catch(() => res.status(400).json("Wrong credentials!"))
})

//Register Page
app.post("/register", (req, res) => {
  const { password, email, name } = req.body
  //hash password
  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hash = bcrypt.hashSync(password, salt)
  //write into the Database tables 'users' and 'login'
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
  //Catch the user profile
  db.select("*")
    .from("users")
    .where("id", "=", id)
    .then((user) => {
      if (user.length) {
        res.json(user[0])
      } else {
        res.json("Could'n find the user")
      }
    })
    .catch(() => res.status(400).json("Error to find the user!"))
})

//Image Page
app.post("/image", (req, res) => {
  const { id } = req.body
  // increment the user's entries
  db("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entries) => res.json(entries[0]))
    .catch((e) => res.status(400).json("Unable to increment the entries :("))
})

//Listen the Server
app.listen(3000, () => {
  console.log("App is running!!")
})

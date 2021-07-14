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

//  Controlers
import register from "./Controllers/register.js"
import signin from "./Controllers/signin.js"
import profile from "./Controllers/profile.js"
import image from "./Controllers/image.js"

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
app.get("/", () => {})
//Signin Page
app.post("/signin", (req, res) => {
  signin.login(req, res, db, bcrypt)
})

//Register Page
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt)
})

//Profile/:userId Page
app.get("/profile/:id", (req, res) => {
  profile.profileId(req, res, db)
})

//Image Page
app.put("/image", (req, res) => {
  image.imgCounter(req, res, db)
})

//Listen the Server
app.listen(3000, () => {
  console.log("App is running!!")
})

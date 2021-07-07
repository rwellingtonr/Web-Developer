/* Planning the Server

/ ---> It's working = res
/signin ---> POST = sucess or fail
/register ---> POST = user
/profile/:userId ---> GET = user 
/image ---> PUT (update user object)

*/

<<<<<<< ours
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
=======
import express from "express"
import cors from "cors"
import kenx from "knex"
import bcrypt from "bcrypt"

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
>>>>>>> theirs

// Root Page
app.get("/", (req, res) => {});
//Signin Page
app.post("/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("Working Sing In!");
  } else {
    res.status(400).json("error to logging in");
  }
});

//Register Page
app.post("/register", (req, res) => {
<<<<<<< ours
  const { password, email, name } = req.body;
  database.users.push({
    name: name,
    id: 125,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  });

  res.json(database.users[database.users.length - 1]);
});

//Profile/:userId Page
app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === parseInt(id)) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.status(400).json("Couldn't find this user");
  }
});

//Image Page
app.post("/image", (req, res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === parseInt(id)) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  });
  if (!found) {
    res.status(400).json("Couldn't find this user");
  }
});
=======
  const { email, name, password } = req.body
  // Hash the password
  const saltRounds = 8
  const salt = bcrypt.genSaltSync(saltRounds)
  const hash = bcrypt.hashSync(password, salt)
  //Join the users table and the login one
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
  }).catch((e) => {
    res.status(400).json("unable to register")
    console.log(e)
  })
})

//Image Page
app.post("/image", (req, res) => {
  const { id } = req.body
  //increment the entries number
  db("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entries) => {
      res.json(entries[0])
    })
    .catch((e) => res.status(400).json("Unable to increment entries"))
})
>>>>>>> theirs

//Listen the Server
app.listen(3000, () => {
  console.log("App is running!!");
});

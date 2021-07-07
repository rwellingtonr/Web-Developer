/* Planning the Server

/ ---> It's working = res
/signin ---> POST = sucess or fail
/register ---> POST = user
/profile/:userId ---> GET = user 
/image ---> PUT (update user object)

*/

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

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

//Listen the Server
app.listen(3000, () => {
  console.log("App is running!!");
});

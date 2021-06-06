import express from "express"
import bodyParser from "body-parser"

const app = express()

app.use(express.static("./public"))
/* const routes = {
	profile: "/profile",
	main: "/",
} */

/* 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get(routes.main, (req, res) => {
	// console.log(req.query) // ? query string
	// req.body
	// req.header
	// req.header
	// req.params
	res.status(404).send("Not found")
})

app.get(routes.profile, (req, res) => {
	res.send("Getting profile")
})

app.post(routes.profile, (req, res) => {
	// User json
	const user = {
		name: "Wellington",
		age: 24,
		job: ["developer", " intern", "proletariate"],
		loves: ["plants", "animals", " poesy"],
	}

	// Create a string in a JSON file
	res.send(user)
}) */

app.listen(3000)

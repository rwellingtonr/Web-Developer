import express from "express"

const app = express()

const routes = {
	profile: "/profile",
	main: "/",
}

app.get(routes.main, (req, res) => {
	res.send("I am in the Main page!")
})

app.get(routes.profile, (req, res) => {
	// User json
	const user = {
		name: "Wellington",
		age: 24,
		job: ["developer", " intern", "proletariate"],
		loves: ["plants", "animals", " poesy"],
	}

	// Create a string in a JSON file
	res.send(user)
})

app.listen(3000)

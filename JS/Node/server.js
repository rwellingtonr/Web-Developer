import http from "http"

const server = http.createServer((request, response) => {
	// logs
	console.log("headers: ", request.headers)
	console.log("Method: ", request.method)
	console.log("Url: ", request.url)

	// Consts
	const user = {
		name: "Wellington",
		surname: "Leardini Ramos",
		age: 24,
		gender: "Male",
		hobby: "Dev new web apps",
	}

	// Response
	response.setHeader("Content-Type", "application/json")
	response.end(JSON.stringify(user))
})

server.listen(3000)

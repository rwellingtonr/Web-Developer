import http from "http";

const server = http.createServer(() => {
	console.log("I can hear you!");
});

server.listen(3000);

import fs from "fs"

const file = "./text.txt"

fs.readFile(file, (err, data) => {
	if (err) {
		throw err
	}
	console.log("Async", data.toString())
})

const fileReaded2 = fs.readFileSync(file)
console.log("Sync", fileReaded2.toString())

// Append
fs.appendFileSync(file, "this is so cool!!!", (err) => {
	console.log(err)
})

// WRITE
/* fs.writeFile(
	"newWriten.txt",
	"Hello!! This is the your newest file!",
	(err) => {
		if (err) {
			throw err
		}
	}
) */
// DELETE
fs.unlink("./newWriten.txt", (err) => {
	if (err) {
		console.log(err)
	}
	console.log("inspection")
})

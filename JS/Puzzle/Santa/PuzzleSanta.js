import { time, timeEnd } from "console"
import fs from "fs"

// FIRST PUZZLE
const whereIsSanta = (string) => {
	const array = string.split("")
	time("Santa is waking")
	// When does he goes to the basement for the first time?
	whenBasement(array)
	const floor = array.reduce((acc, i) => {
		if (i === "(") {
			return (acc += 1)
		} else if (i === ")") {
			return (acc -= 1)
		}
	}, 0)
	timeEnd("Santa is waking")
	console.log(`Santa is in the floor number ${floor}`)
}

const whenBasement = (array) => {
	let counter = 0
	let acc = 0
	const when = array.some((currentValue) => {
		if (currentValue === "(") {
			acc += 1
		} else if (currentValue === ")") {
			acc -= 1
		}
		counter++
		return acc < 0
	})
	console.log(`Santa goes to basement at step ${counter}`)
}

fs.readFile("./PuzzleSanta.txt", (err, data) => {
	if (err) {
		throw err
	} else {
		// Which floor is Santa?

		whereIsSanta(data.toString())
	}
})

// SECOND PUZZLE

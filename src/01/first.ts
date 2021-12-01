import fs from 'fs'
import path from 'path'

const filePath = path.join(__dirname, 'sonar.txt')
const buffer = fs.readFileSync(filePath)
const text = buffer.toString()
const measurements: Array<number> = text.split('\n').map((value) => Number.parseInt(value))

let numberOfIncreases = 0

for (let index = 1; index < measurements.length; index++) {
  if (measurements[index] > measurements[index - 1]) {
    numberOfIncreases++
  }
}

console.log(numberOfIncreases)

import fs from 'fs'
import path from 'path'

const filePath = path.join(__dirname, 'sonar.txt')
const buffer = fs.readFileSync(filePath)
const text = buffer.toString()
const measurements: Array<number> = text.split('\n').map((value) => Number.parseInt(value))
const threeSumMeasurements: Array<number> = []

for (let index = 0; index < measurements.length - 2; index++) {
  const sum = measurements[index] + measurements[index + 1] + measurements[index + 2]
  threeSumMeasurements.push(sum)
}

let numberOfIncreases = 0

for (let index = 1; index < threeSumMeasurements.length; index++) {
  if (threeSumMeasurements[index] > threeSumMeasurements[index - 1]) {
    numberOfIncreases++
  }
}

console.log(numberOfIncreases)

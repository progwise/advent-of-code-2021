import fs from 'fs'
import path from 'path'

const filePath = path.join(__dirname, 'map.txt')
const buffer = fs.readFileSync(filePath)
const text = buffer.toString()

const lines = text.split('\n')

const extractNumbers = (line: string): string[] => {
  const characters = line.split('')
  return characters.filter((char) => !Number.isNaN(Number.parseInt(char)))
}

let cumSum = 0

for (const line of lines) {
  const numbers = extractNumbers(line)

  console.log(numbers)
  const firstNumberChar = numbers[0]
  const lastNumberChar = numbers[numbers.length - 1]
  const lineNumbers = Number.parseInt(firstNumberChar + lastNumberChar)

  cumSum += lineNumbers
}

console.log(cumSum)

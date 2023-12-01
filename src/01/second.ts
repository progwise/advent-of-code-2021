import fs from 'fs'
import path from 'path'

const findDigitRegex = /(\d|one|two|three|four|five|six|seven|eight|nine)/g
const reverseDigitRegex = /(\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/g

const possibleDigits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

// "2"
const parseDigit = (digit: string): string => {
  const digitIndex = possibleDigits.findIndex((possibleDigit) => possibleDigit === digit)

  if (digitIndex > -1) {
    return (digitIndex + 1).toString()
  }

  return digit
}

const filePath = path.join(__dirname, 'map.txt')
const buffer = fs.readFileSync(filePath)
const text = buffer.toString()

const lines = text.split('\n')

const extractNumbers = (line: string): [string, string] => {
  return [
    line.match(findDigitRegex)![0],
    line.split('').reverse().join('').match(reverseDigitRegex)![0].split('').reverse().join(''),
  ]
}

let cumSum = 0

for (const line of lines) {
  const [firstNumber, lastNumber] = extractNumbers(line)
  const firstNumberChar = parseDigit(firstNumber)
  const lastNumberChar = parseDigit(lastNumber)
  const lineNumbers = Number.parseInt(firstNumberChar + lastNumberChar)

  console.log(lineNumbers, line)

  cumSum += lineNumbers
}

console.log(cumSum)

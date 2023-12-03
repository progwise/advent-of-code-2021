import fs from 'fs'
import path from 'path'

const filePath = path.join(__dirname, 'game.txt')
const buffer = fs.readFileSync(filePath)
const text = buffer.toString()

const lines = text.split('\n')

const maxPowers = lines.map((line) => {
  const cubeSets = line
    .substring(line.indexOf(':') + 1)
    .trim()
    .split(';')
    .map((color) =>
      color
        .trim()
        .split(',')
        .map((num) => num.trim()),
    )

  const maxPossible = {
    red: Number.MIN_SAFE_INTEGER,
    blue: Number.MIN_SAFE_INTEGER,
    green: Number.MIN_SAFE_INTEGER,
  }

  for (const set of cubeSets) {
    for (const drawing of set) {
      const match = drawing.match(/(?<AMOUNT>\d+) (?<COLOR>\S+)/)
      const color = match?.groups?.['COLOR']
      const value = parseInt(match?.groups?.['AMOUNT'] ?? '0', 10)
      color === 'red' && (maxPossible.red = Math.max(maxPossible.red, value))
      color === 'green' && (maxPossible.green = Math.max(maxPossible.green, value))
      color === 'blue' && (maxPossible.blue = Math.max(maxPossible.blue, value))
    }
  }

  return maxPossible
})
const powersSum = maxPowers.map((cube) => cube.red * cube.green * cube.blue).reduce((total, power) => total + power, 0)
console.log('Total powers sum:', powersSum)

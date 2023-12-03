import fs from 'fs'
import path from 'path'

const filePath = path.join(__dirname, 'game.txt')
const buffer = fs.readFileSync(filePath)
const text = buffer.toString()

const lines = text.split('\n')

const possibleGameNums = lines
  .map((line, i) => {
    const gameNum = i + 1
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

    const isPossible = cubeSets.every((set) =>
      set.every((drawing) => {
        const match = drawing.match(/(?<AMOUNT>\d+) (?<COLOR>\S+)/)
        const color = match?.groups?.['COLOR']
        const value = parseInt(match?.groups?.['AMOUNT'] ?? '0', 10)
        return (
          (color === 'red' && value <= 12) || (color === 'green' && value <= 13) || (color === 'blue' && value <= 14)
        )
      }),
    )

    if (isPossible) {
      return gameNum
    }
    return 0 // Return 0 for unsuccessful games
  })
  .filter(Boolean)

const totalSuccessfulGames = possibleGameNums.reduce((total, gameNum) => total + gameNum, 0)

console.log('Total successful games:', totalSuccessfulGames)

import fs from 'fs'
import path from 'path'

const filePath = path.join(__dirname, 'sonar.txt')
const buffer = fs.readFileSync(filePath)
const text = buffer.toString()

console.log(text)

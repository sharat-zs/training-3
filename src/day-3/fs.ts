import fs from 'fs/promises'

async function readFile() {
  const data = await fs.readFile('./dummy.txt')
  console.log(data.toString())
}
readFile()

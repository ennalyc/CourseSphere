import { promises as fs } from 'fs'
import path from 'path'

export async function readJSON(fileName: string) {
  const filePath = path.join(process.cwd(), 'src/lib/data', fileName)
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data)
}

export async function writeJSON(fileName: string, data: any) {
  const filePath = path.join(process.cwd(), 'src/lib/data', fileName)
  await fs.writeFile(filePath, JSON.stringify(data, null, 2))
}

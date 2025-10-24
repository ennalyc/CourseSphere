import { NextResponse } from 'next/server'
import { readJSON, writeJSON } from '@/lib/fileUtils'
import { v4 as uuidv4 } from 'uuid'

const FILE = 'courses.json'

export async function GET() {
  const data = await readJSON(FILE)
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const body = await request.json()
  const data = await readJSON(FILE)

  const newCourse = {
    id: uuidv4(),
    ...body,
    createdAt: new Date().toISOString(),
  }

  data.push(newCourse)
  await writeJSON(FILE, data)

  return NextResponse.json(newCourse, { status: 201 })
}

export async function PUT(request: Request) {
  const body = await request.json()
  const data = await readJSON(FILE)

  const index = data.findIndex((c: any) => c.id === body.id)
  if (index === -1) {
    return NextResponse.json({ error: 'Curso não encontrado.' }, { status: 404 })
  }

  data[index] = { ...data[index], ...body }
  await writeJSON(FILE, data)
  return NextResponse.json(data[index])
}

export async function DELETE(request: Request) {
  const { id } = await request.json()
  const data = await readJSON(FILE)
  const filtered = data.filter((c: any) => c.id !== id)

  await writeJSON(FILE, filtered)
  return NextResponse.json({ success: true })
}

import { NextResponse } from 'next/server'
import { readJSON, writeJSON } from '@/lib/fileUtils'
import { v4 as uuidv4 } from 'uuid'

const FILE = 'users.json'

export async function GET() {
  const data = await readJSON(FILE)
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, password } = body

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Campos obrigatórios' }, { status: 400 })
  }

  const data = await readJSON(FILE)
  const userExists = data.some((u: any) => u.email === email)

  if (userExists) {
    return NextResponse.json({ error: 'E-mail já cadastrado' }, { status: 409 })
  }

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password,
  }

  data.push(newUser)
  await writeJSON(FILE, data)

  return NextResponse.json(newUser, { status: 201 })
}


export async function DELETE(request: Request) {
  const { id } = await request.json()
  const data = await readJSON(FILE)
  const filtered = data.filter((u: any) => u.id !== id)
  await writeJSON(FILE, filtered)
  return NextResponse.json({ success: true })
}

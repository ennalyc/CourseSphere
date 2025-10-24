import { NextResponse } from 'next/server'
import { readJSON } from '@/lib/fileUtils'

const FILE = 'users.json'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await readJSON(FILE)
  const user = data.find((u: any) => String(u.id) === params.id)

  if (!user) {
    return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 })
  }

  return NextResponse.json(user)
}

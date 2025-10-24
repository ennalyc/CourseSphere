import { NextResponse } from 'next/server'
import { readJSON } from '@/lib/fileUtils'

const FILE = 'lessons.json'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')?.toLowerCase() || ''

    const data = await readJSON(FILE)

    const filtered = query
    ? data.filter((lesson: any) =>
        [lesson.name, lesson.description]
          .filter(Boolean) 
          .some((field) =>
            field.toLowerCase().includes(query)
          )
      )
    : data

  return NextResponse.json(filtered)
}
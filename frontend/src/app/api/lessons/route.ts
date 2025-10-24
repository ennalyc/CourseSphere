import { NextResponse } from "next/server";
import { readJSON, writeJSON } from '@/lib/fileUtils'
import { v4 as uuidv4 } from 'uuid'
import { json } from "zod"; 

const LESSONSFILE = 'lessons.json'
const COURSEFILE =  'courses.json'

export async function GET() {
    const data = await readJSON(LESSONSFILE)
    return NextResponse.json(data)
}

export async function POST(request: Request) {
    const body = await request.json()
    const { title, status, publish_date, video_url, course_id, creator_id } = body

    const data = await readJSON(LESSONSFILE)

    if (!title || !status || !publish_date || !video_url) {
        return NextResponse.json({error: 'Campos Obrigatórios.'}, { status: 400 })
    }

    const newLesson = {
       id: uuidv4(),
        title,
        status,
        publish_date,
        video_url,
        course_id,
        creator_id,
    }
    data.push(newLesson) 
    await writeJSON(LESSONSFILE, data)

    return NextResponse.json(newLesson, { status: 201 })
}

export async function PUT(request: Request) {
  const body = await request.json()
  const { id, title, status, video_url, currentUserId } = body

  const lessons = await readJSON(LESSONSFILE)
  const lessonIndex = lessons.findIndex((l: any) => l.id === id)

  if (lessonIndex === -1) {
    return NextResponse.json({ error: 'Aula não encontrada' }, { status: 404 })
  }

  const lesson = lessons[lessonIndex]
  const courses = await readJSON(COURSEFILE)
  const course = courses.find((c: any) => c.id === lesson.course_id)

  const isLessonCreator = lesson.creator_id === currentUserId
  const isCourseCreator = course?.creator_id === currentUserId

  if (!isLessonCreator && !isCourseCreator) {
    return NextResponse.json({ error: 'Permissão negada' }, { status: 403 })
  }

  const updatedLesson = { ...lesson, title, status, video_url }
  lessons[lessonIndex] = updatedLesson
  await writeJSON(LESSONSFILE, lessons)

  return NextResponse.json(updatedLesson)
}

export async function DELETE(request: Request) {
    const { id } = await request.json()
    const data = await readJSON(LESSONSFILE)
    const filtered = data.filter((u: any) => u.id !== id)
    
    await writeJSON(LESSONSFILE, filtered)

    return NextResponse.json({success: true})
}
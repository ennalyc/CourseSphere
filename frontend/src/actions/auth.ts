import { SignupFormSchema } from '@/lib/definitions'
import { FormState } from '@/types/form'

export async function signup(state: FormState, formData: FormData) {

    const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    message: state?.message
  })
 
  if (!validatedFields.success) {

    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, password } = validatedFields.data

  
}
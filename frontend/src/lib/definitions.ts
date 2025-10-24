import { z } from 'zod'

z.config(z.locales.pt());
 
export const SignupFormSchema = z.object({
  name: z
    .string('Insira seu nome.')
    .trim()
    .min(1, 'Insira seu nome.'),
  email: z.string('Insira seu e-mail.').email('Insira um e-mail válido.').trim(),
  password: z
    .string('Insira sua senha.')
    .min(6, 'Sua senha deve conter pelo menos 6 dígitos.' )
    .trim(),
})

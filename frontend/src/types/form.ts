export type authFormErrors = {
  name?: string[]
  email?: string[]
  password?: string[]
} 

export type FormState = {
  errors?: authFormErrors
  message?: string
} | undefined

type FieldName = keyof authFormErrors

export type FieldConfig = {
  title: FieldName
  fieldTitle: string
  placeHolder: string
  inputType: string
}

export type FormType = {
    id: string,
    fields: FieldConfig[]
}
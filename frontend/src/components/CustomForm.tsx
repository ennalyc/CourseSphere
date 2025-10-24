import React from 'react'
import CustomInputField from './ui/CustomInputField'
import { authFormErrors, FieldConfig, FormState } from '@/types/form'


function CustomForm({fields, state, action, pending, bttnText}: {fields: FieldConfig[], state: FormState, action: (payload: FormData) => void, pending: boolean, bttnText: string | undefined}) {
    console.log(state)
    console.log(action)
    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <form action={action} >
                {
                   fields.map((field, index) => {
                    return (
                        <div key={index} className='mb-2'>
                            <CustomInputField
                            fieldTitle={field.fieldTitle}
                            placeHolder={field.placeHolder}
                            htmlField={field.title}
                            style="w-80"
                            inputType={field.inputType}
                            />
                            {state?.errors?.[field.title] && (
                                <p className='text-xs text-red-600 mt-1'>{state?.errors?.[field.title]}</p>
                            )}
                        </div>
                    )
                   })
                }
                <button disabled={pending} type="submit" className='w-80 h-12 mb-8 rounded-md text-center font-bold bg-black text-white mt-4'>{bttnText}</button>

            </form>

        </div>
    )
}

export default CustomForm
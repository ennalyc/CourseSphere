import React from 'react'
import CustomInputField from './ui/CustomInputField'
import { FormField } from '@/types/form'

function CustomForm({fields}: {fields: FormField[]}) {

    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            {fields.map((field) => (
                <div key={field.id}>
                    <CustomInputField
                    fieldTitle={field.fieldTitle}
                    placeHolder={field.placeHolder}
                    htmlField={field.title}
                    style="w-80"
                    inputType={field.inputType}
                    />
                </div>
            ))}
        </div>
    )
}

export default CustomForm
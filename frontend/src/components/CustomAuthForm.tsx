'use client'
import React from 'react'
import { useState } from "react";
import { authForm } from "@/lib/formTypes";
import CustomForm from "@/components/CustomForm";

const CustomAuthForm = () => {
    const buttons = [
    {id: 1, type: "login", title: "Login", text: "Fazer Login"},
    {id: 2, type: "sign-up", title: "Sign-up", text: "Cadastre-se"}
  ]
  const [buttonClicked, setButtonClicked] = useState(1)
  const handleClick = (btn: number) => {
    setButtonClicked(btn)
  }
  return (
    <div className="flex flex-col items-center h-[350px] w-100 bg-white rounded-xl border border-neutral-300 overflow-hidden">
          <div className="flex flex-row mb-4">
              {buttons.map((btn) => (
              <div onClick={() => handleClick(btn.id)} key={btn.id} className={`font-bold w-50 h-16 flex items-center justify-center border-b border-neutral-300 ${buttonClicked === btn.id ? 'text-black' : 'text-neutral-500 bg-neutral-200'}`}>
                {btn.title}
              </div>
              ))}
          </div>
          {
            buttons.map((bttn) => {
              const formFields = authForm.find(f => f.id === bttn.type)?.fields
              return (
              <div key={bttn.id}>
                {
                  bttn.id === buttonClicked && formFields &&
                  <>
                  <CustomForm
                  fields={formFields}
                  />
                  <button className='w-80 h-12 rounded-md text-center font-bold bg-black text-white mt-6'>{bttn.text}</button>
                  </>
                
                }
              </div>
            )
            })
          }
        
      </div>
  )
}

export default CustomAuthForm
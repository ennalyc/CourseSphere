'use client'
import React from 'react'
import { useState } from "react";
import { authForm } from "@/lib/constants/formTypes";
import CustomForm from "@/components/CustomForm";
import { useActionState } from 'react'
import { signup } from '@/actions/auth'

const CustomAuthForm = () => {
    const buttons = [
    {id: "login", title: "Login"},
    {id: "sign-up", title: "Sign-up"}
    ];
    const [buttonClicked, setButtonClicked] = useState("login")
    const handleClick = (btn: string) => {
        setButtonClicked(btn)
    };
    const [signupState, signupAction, signupPending] = useActionState(signup, undefined);
    const loginFormConfig = authForm.find(f => f.id === 'login');
    const signupFormConfig = authForm.find(f => f.id === 'sign-up');
  return (
    <div className="flex flex-col items-center w-100 bg-white rounded-xl border border-neutral-300 overflow-hidden">
          <div className="flex flex-row mb-4">
              {buttons.map((btn) => (
              <div onClick={() => handleClick(btn.id)} key={btn.id} className={`font-bold w-50 h-16 flex items-center justify-center border-b border-neutral-300 ${buttonClicked === btn.id ? 'text-black' : 'text-neutral-500 bg-neutral-200'}`}>
                {btn.title}
              </div>
              ))}
          </div>
          {
           buttonClicked === "login" && loginFormConfig &&
           (
           <p>To-do</p> 
          )
          }
          {
            buttonClicked === "sign-up" && signupFormConfig && (
              <CustomForm
              fields={signupFormConfig.fields}
              state={signupState}
              action={signupAction}
              pending={signupPending}
              bttnText="Cadastre-se"
              />  
            )
          }

      </div>
  )
}

export default CustomAuthForm
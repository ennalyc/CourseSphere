import { FormType } from "@/types/form";

export const authForm: FormType[] = [
    {
        id: 'sign-up',
        fields: [
            {
            title: "name",
            fieldTitle: "Nome",
            placeHolder: "Digite seu nome",
            inputType: "text"
            },
            {
                title: "email",
                fieldTitle: "Email",
                placeHolder: "Digite seu email",
                inputType: "email"
            },
            {
                title: "password",
                fieldTitle: "Senha",
                placeHolder: "Digite sua senha",
                inputType: "password"
            }
        ]

    },
    {
        id: "login",
        fields: [
            {
                title: "email",
                fieldTitle: "Email",
                placeHolder: "Digite seu email",
                inputType: "email"
            },
            {
                title: "password",
                fieldTitle: "Senha",
                placeHolder: "Digite sua senha",
                inputType: "password"
            }
        ]
    }
]
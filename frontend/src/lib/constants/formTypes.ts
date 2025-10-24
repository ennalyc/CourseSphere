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
    },
]

export const courseForm = [
    {
        id: 1,
        title: "name",
        fieldTitle: "Nome",
        placeHolder: "Digite o nome do curso",
        inputType: "text"
    },
    {
        id: 2,
        title: "description",
        fieldTitle: "Descrição",
        placeHolder: "Digite a descrição do curso",
        inputType: "text"
    },
    {
        id: 3,
        title: "date-start",
        fieldTitle: "Data de início",
        placeHolder: "",
        inputType: "date"
    },
    {
        id: 4,
        title: "date-end",
        fieldTitle: "Data de término",
        placeHolder: "",
        inputType: "date"
    }
        
]
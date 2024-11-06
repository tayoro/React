import { useState } from "react"
import Pseudo from "./pseudo"
import Password from "./password"
import Confirmaton from "./Confirmation"

export default function Validation(){
    const [inputsStates, setInputsStates] = useState({
        pseudo: "",
        password: "",
        passwordConfirmation: ""
    })

    const [showValidation, setShowValidation] = useState({
        pseudo: false,
        password: false,
        passwordConfirmation: false
    })

  

    function handleSubmit(e){
        e.preventDefault()

        if(validationCheck()){
            console.log("Envoi du formulaire")
        }
    }

    //Verification (essaie de voir si on a passé la validation) 
    function validationCheck(){
        const areValid = {
            pseudo: false,
            password: false,
            passwordConfirmation: false
        }

        //Si la taille de pseudo <3 ou >64
        if(inputsStates.pseudo.length < 3 || inputsStates.pseudo.length > 64){
            setShowValidation(state => ({...state, pseudo: true}))
        }
        else {
            areValid.pseudo = true
            setShowValidation(state => ({...state, pseudo: false}))
        }


        //SI la taille du password < 6 et est ce que mon mot de passe contient des chiffres
        if(inputsStates.password.length < 6 || !/\d/.test(inputsStates.password)){
            setShowValidation(state => ({...state, password: true}))
        }
        else {
            areValid.password = true
            setShowValidation(state => ({...state, password: false}))
        }


        if(inputsStates.passwordConfirmation !== inputsStates.password){
            setShowValidation(state => ({...state, passwordConfirmation: true}))
        }
        else {
            areValid.passwordConfirmation = true
            setShowValidation(state => ({...state, passwordConfirmation: false}))
        }

        console.log(areValid)
        console.log(Object.values(areValid).every(value => value))


        if(Object.values(areValid).every(value => value)){
            return true //La functuon validationCheck() return true
        }
        else {
            false //La functuon validationCheck() return false
        }

    }


    return(
       <form 
       onSubmit={handleSubmit}
       className="max-w-xl mx-auto border p-10 rounded">
        <p className="text-slate-100 text-xl mb-6">
            Creez votre nom d'utilisateur et votre mot de passe
        </p>
        <Pseudo 
        inputsStates = {inputsStates}
        setInputsStates = {setInputsStates}
        showValidation = {showValidation}
        />

        <Password 
        inputsStates = {inputsStates}
        setInputsStates = {setInputsStates}
        showValidation = {showValidation}
        />

        <Confirmaton 
        inputsStates = {inputsStates}
        setInputsStates = {setInputsStates}
        showValidation = {showValidation}
        />
        <button 
        className="mt-10 bg-slate-100 px-4 py-2 min-w-[125px] rounded">Valider</button>
       </form>
    )
}
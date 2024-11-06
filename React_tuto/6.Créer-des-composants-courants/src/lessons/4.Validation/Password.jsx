export default function Password({inputsStates , setInputsStates, showValidation}){
    return(
        <>
            <label 
                htmlFor="password"
                className="text-slate-50 inline-block mt-5"
            >
                Votre mot de pass: Au moins un chiffre et 6 Caractères
            </label>

            <input
            id="password" 
            type="password" 
            className="rounded w-full p-1 mt-2"
            value={inputsStates.password}
            onChange={(e) => setInputsStates({... inputsStates, password: e.target.value})}
            />
            {(showValidation.password) && (<p className="text-red-400">Au moins un chiffre te 6 caractère</p>)}
        </>
    )
}
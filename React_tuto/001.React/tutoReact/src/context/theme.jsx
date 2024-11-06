
import { createContext, useContext, useState } from "react"

// initialisation du context
const ThemeContext = createContext({})

// provider 
export const ThemeContextProvider = ({ children }) => {
    const [background, setBackground] = useState('lightgreen')

    return (
        <ThemeContext.Provider value={{background, setBackground}} >
            {children}
        </ThemeContext.Provider>
    )
}

//utilisation du Hook <<useContext>> 
export const useThemeContext = () => useContext(ThemeContext)
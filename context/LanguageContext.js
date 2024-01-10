import { useState, useEffect, useContext, createContext } from 'react'
import { useRouter } from 'next/router'

const LanguageCtx = createContext()
export const GetLanguageContext = () => useContext(LanguageCtx)

const LanguageContext = ({ children }) => {
    const { locale } = useRouter()
    const [language, setLanguage] = useState(locale)
  
    useEffect(() => {
      setLanguage(locale)
    }, [])
  
    return(
        <LanguageCtx.Provider value={{language, setLanguage}}>
            {children}
        </LanguageCtx.Provider>
    )
}

export default LanguageContext
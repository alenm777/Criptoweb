import React, { useState, useEffect, createContext } from "react";

const getTemaInicial = () => {
    if(typeof window !== 'undefined' && window.localStorage) {
        const storedPref = window.localStorage.getItem('color-theme')
         if (typeof storedPref === 'string') {
            return storedPref
         }
         const userMedia = window.matchMedia('(prefers-color-scheme: dark)') 
         if (userMedia.matches) {
            return 'dark'
         }
    }
    return 'light'
}

export const Tema = createContext()

export const TemaProvider = ({temaInicial, children}) => {
    const [tema, setTema] = useState(getTemaInicial)

    const rawSetTema = (tema) => {
        const root = window.document.documentElement;
        const isDark = tema === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(tema)
        localStorage.setItem('color-tema', tema)
    }

    if(temaInicial) {
        rawSetTema(temaInicial)
    }

    useEffect(()=> {
        rawSetTema(tema)
    }, [tema])

    return (
        <Tema.Provider value={{tema, setTema}}>
            {children}
        </Tema.Provider>
    )
} 

import { useState, createContext } from "react"
import {Menu} from './pages/home/menu.js'

export const Contexto = createContext()


export function VariablesContexto({children}){

    const [menuPlatos, setMenuPlatos] = useState(Menu)

    return(
        <Contexto.Provider value={{ menuPlatos, setMenuPlatos }}>
            {children}
        </Contexto.Provider>
        )
}

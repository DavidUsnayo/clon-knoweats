import { Link } from "react-router-dom"
import './boton.css'

export function BotonLink({ir,titulo}){
    return(
        <Link to={ir} className='irMenu'> {titulo} </Link>
        )
}
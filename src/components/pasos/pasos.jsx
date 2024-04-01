
import './pasos.css'
export function Pasos({imagen, titulo, texto}){

    return(
        <div className="caja-paso">
            <img src={imagen} alt="imagen" />
            <h2> {titulo} </h2>
            <p>{texto} </p>
        </div>
    )
}
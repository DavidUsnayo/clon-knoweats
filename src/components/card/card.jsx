
import './card.css'
import { BotonLink } from '../boton/boton'
export function Card({titulo, texto, fondo, imgRight, imgLeft, boton}){
    return(
        <div className='box-card' style={{background:fondo}}>
            {imgLeft ? <img src={imgLeft} alt="imagen"/> : ''}
            <div>
                <h2> {titulo} </h2>
                <p dangerouslySetInnerHTML={{ __html: texto}} />
                {boton ? <BotonLink titulo='SABER MAS'/> : ''}
            </div>
            {imgRight ? <img src={imgRight} alt="imagen"/> : ''}
        </div>
    )
}
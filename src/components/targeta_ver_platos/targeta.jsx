import './targeta.css'
import { BotonLink } from '../boton/boton'

export function TargetaVerPlatos(){
    return(
        <div className="platos-de-semana">
            <h2 className='h2'>¿Has visto ya nuestros platos de esta semana?</h2>
            <p>Échale un vistazo a la carta y la semana que viene olvídate de cocinar sin dejar de comer bien.</p>
            <BotonLink ir='/menu' titulo='VER PLATOS'/>
        </div>
    )
}
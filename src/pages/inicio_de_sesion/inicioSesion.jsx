import './inicioSesion.css'
import { BotonLink } from '../../components/boton/boton'

export function InicioSesion(){

    return(
        <div className="inicio-de-sesion">
            <div className="sesion">
                <h2> Inicio de sesión 👋 </h2>
                <p>Introduce tu cuenta de siempre en Knoweats o regístrate si es tu primera vez.</p>
                <input type="text" placeholder='Correo electronico'/>
                <input type="password" placeholder='Contraseña'/>
                <p className='olvidaste'>¿Olvidaste tu contraseña?</p>
                <BotonLink titulo='INICIAR SESION'/>
                <p>Crear Cuenta</p>
            </div>
        </div>
    )
}

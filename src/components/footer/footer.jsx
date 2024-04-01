import './footer.css'
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

export function Footer(){

    return(
        <div className='footer'>
            <div>
                <h2>Knoweats!</h2>
                <IoLogoFacebook/>
                <FaInstagramSquare/>
            </div>
            <div>
                <h3>Empresa</h3>
                <p>¿Como funciona?</p>
                <p>¿Quienes somos?</p>
                <p>Sistema de eventos</p>
                <p>Plastic Neutral</p>
            </div>
            <div>
                <h3>Productos y Servicios</h3>
                <p>Menú de la semana</p>
                <p>Comidas para empresa</p>            
                <p>Recargar el monedero</p>
            </div>
            <div>
                <h3>Informacion</h3>
                <p>Preguntas frecuentes - Knoweats!</p>
                <p>Política de privacidad</p>
                <p>Terminos y condiciones de uso</p>
                <p>Aviso legal</p>
                <p>Envíos</p>
                <p>Devoluciones</p>
                <p>GDPR Compliance</p>
            </div>
            <div>
                <h3>Contacto</h3>
                <p>Contacta con nosotros</p>
                <p>info@knoweats.com</p>
                <p>¡Pregúntanos por WhatsApp!</p>
            </div>
        </div>
        )
}
import { BotonLink } from '../../components/boton/boton'
import './funciona.css'

import ilustracion1 from '../../assets/mas/ilu1.webp'
import ilustracion2 from '../../assets/mas/ilu2.webp'
import ilustracion3 from '../../assets/mas/ilu3.webp'

import { AlgunaDuda } from './alguna_duda'
import { AcordeonDudas } from '../../components/dudas/dudas'
import { TargetaVerPlatos } from '../../components/targeta_ver_platos/targeta'

export function ComoFunciona(){

    return(
        <div className="como-funciona">
            <h2>Cómo funciona</h2>
            <p>COMER BIEN NUNCA HABÍA SIDO TAN FÁCIL</p>
            <div className="first-section">
                <img src={ilustracion1} alt="" />
                <div>
                    <h2>Elige los platos que más te gusten</h2>
                    <p> <b>Cada lunes</b>  estrenamos carta con <b>nuevos platos</b> para que disfrutes de la mejor cocina mediterránea.  <br /> <br /> Sólo tienes que elegir los platos que quieras comer la siguiente semana y nuestro equipo de cocina se pondrá manos a la obra. Todos los platos están <b>diseñados</b> por el equipo de <b>chefs y nutricionistas</b> para que disfrutes de una <b>dieta sana</b>, elaborada con la mejor materia prima <b>local y de temporada</b>.</p>
                </div>
            </div>
            <div className="second-section">
                <div>
                    <h2>Te los llevamos donde estés</h2>
                    <p>Te garantizamos que tus tápers llegarán estés donde estés <b>totalmente frescos en una única entrega</b> a partir del lunes siguiente a la fecha en la que hagas tu pedido. <br /><br />  ¡Ya no tienes que preocuparte en ir a comprar, ponerte a cocinar y limpiar! <br /> <br /> Consulta nuestro <b>sistema de envíos aquí:</b></p>
                    <BotonLink ir='' titulo='SISTEMAS DE ENVIOS'/>
                </div>
                <img src={ilustracion2} alt="" />
            </div>
            <div className="terteary-section">
                <img src={ilustracion3} alt="" />
                <div>
                    <h2>Abre, calienta y disfruta</h2>
                    <p>Una vez tengas tus platos, podrás mantenerlos en la nevera durante <b>8 días</b> como el primer día, sólo tendrás que calentar el plato que prefieras y disfrutar de una <b>comida rica, saludable y equilibrada.</b> <br /> <br /> ¡Nosotros cocinamos por ti, tú sólo preocúpate de aprovechar tu tiempo!</p>
                </div>
            </div>
            <TargetaVerPlatos/>
            <section className='seccion-dudas'>
                <h2>¿Alguna duda?</h2>
                {
                    <AcordeonDudas valor={AlgunaDuda}/>
                }
            </section>
        </div>
    )
}
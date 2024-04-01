import './somos.css'
import { Card } from '../../components/card/card'

import somos1 from '../../assets/mas/somos1.webp'
import somos2 from '../../assets/mas/somos2.webp'
import somos3 from '../../assets/mas/somos3.webp'
import somos4 from '../../assets/mas/somos4.webp'
import somos5 from '../../assets/mas/somos5.webp'
import somos6 from '../../assets/mas/somos6s.webp'
import { TargetaVerPlatos } from '../../components/targeta_ver_platos/targeta'

export function QuienesSomos(){

    return(
        <div className='quienes-somos'>
            <h2>Quiénes somos</h2>
            <p>TE HABLAMOS SOBRE NOSOTROS</p>
            <div className='card-somos'>
                <Card 
                    titulo='De dónde venimos' 
                    texto='En su último año de carrera, Dani centra su interés en la idea de ayudar a la gente a <b>comer bien sin esfuerzo</b>, este fue el primer paso de Knoweats. <br /><br /> ara hacer esta idea realidad, propone el proyecto a una empresa familiar con <b>más de 30 años de experiencia</b>  en el sector de la restauración con <b>sede en La Nucía (Alicante).</b>  Y ahí, junto a su amigo Carlos quién se encargaría de la parte visual, emprenden su andadura en el mundo de la gastronomía.'
                    fondo='#f2f2f2'
                    imgRight={somos1}
                />
                <Card 
                    titulo='A dónde vamos' 
                    texto='Tras ya más de 4 años desde el inicio de este proyecto, de <b> más de 150.000 platos vendidos </b>, seguimos con la ilusión intacta y con ganas de mejorar cada día. <br><br> Nuestro objetivo no es otro que seguir haciéndoos <b>la vida más fácil </b>cocinando por vosotros con el mejor producto y los mejores cocineros.'
                    imgLeft={somos2}
                />
                <Card 
                    titulo='Cómo lo hacemos' 
                    texto='<b>La clave </b> para que nuestros platos se mantengan en perfectas condiciones hasta que os llegan y los consumís, <b>es la temperatura</b>. Utilizamos un cuidadoso sistema de envasado denominado <b>"cook and chill"</b>, con el que envasamos en caliente y bajamos rápidamente la temperatura de los platos evitando la proliferación de microorganismos y consiguiendo alargar la vida del producto.<br><br> Después salen de nuestras instalaciones en <b>transporte refrigerado</b> hasta que llega a vuestras neveras, el hecho de que no se pierda <b>la línea de frío</b> hace que se mantengan en perfectas condiciones.'
                    fondo='#f2f2f2'
                    imgRight={somos3}
                />
                <Card 
                    titulo='Nuestras instalaciones' 
                    texto='Nuestras cocinas están situadas  <b>en La Nucía (Alicante)</b>. Aquí se cocinan todos los platos y se envían cada lunes a cualquier punto de la península.'
                    imgLeft={somos4}
                />
                <Card 
                    titulo='Tradición mediterránea.' 
                    texto='Tanto Dani como Carlos nacieron en Benidorm y han vivido la gastronomía como un medio de vida muy habitual en la zona, que además, posee una <b>gran tradición culinaria</b>. <br><br> Ahora ellos desde La Nucía, un pueblo vecino, quieren llevar <b>los mejores sabores </b>al resto de la península.'
                    fondo='#f2f2f2'
                    imgRight={somos5}
                />
                <Card 
                    titulo='Apostando por un mundo mejor' 
                    texto='Nos preocupa el planeta en el que  vivimos, por eso, nos hemos comprometido a <b>compensar el uso de plástico</b> en nuestras bandejas de comida.<br><br> Utilizamos envases de plástico fácilmente reciclable pero además, gracias a nuestros amigos de <b>Gravity Wave</b>, por cada bandeja que utilizamos, recogemos el equivalente en residuos plásticos vertidos en nuestro mar Mediterráneo, obteniendo el <b> certificado "plastic neutral"</b>.'
                    imgLeft={somos6}
                    boton={true}
                />
            </div>
            <TargetaVerPlatos/>
        </div>
    )
}
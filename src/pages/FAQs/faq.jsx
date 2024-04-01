import './faq.css'
import { servicio } from './preguntas/preguntas_servicio'
import { platos } from './preguntas/preguntas_platos'
import { condiciones } from './preguntas/preguntas_condiciones'

import { AcordeonDudas } from '../../components/dudas/dudas'
import { TargetaVerPlatos } from '../../components/targeta_ver_platos/targeta'

export function FAQs(){

    return(
        <div className="FAQs">
            <h2>Preguntas frecuentes</h2>
            <div className="preguntas">
                <h2>Servicio</h2>
                <AcordeonDudas valor={servicio}/>
            </div>
            <div className="preguntas">
                <h2>Los platos</h2>
                <AcordeonDudas valor={platos}/>
            </div>
            <div className="preguntas">
                <h2>Condiciones</h2>
                <AcordeonDudas valor={condiciones}/>
            </div>
            <TargetaVerPlatos/>
        </div>
    )
}
//import {Menu as platos} from '../../pages/home/menu'
import { useContext, useState } from 'react'
import { Contexto } from '../../contexto'
import './menu.css'

import { ContenidoPlatos } from '../../layauts/contenido_platos/platos'

export function Menu(){

    const {menuPlatos} = useContext(Contexto)

    const platoPricipal = menuPlatos.filter(e => e.categoria == 'principal')
    const platoVeganos = menuPlatos.filter(e => e.categoria == 'veganos')
    const platoPostres = menuPlatos.filter(e => e.categoria == 'postres')

    const [mostrar, setMostrar] = useState([true,true,true])
    const [activeTab, setActiveTab] = useState(0);
    const [numplatos, setNumPlatos] = useState(menuPlatos.length)

    function boton(tabIndex){
        setActiveTab(tabIndex)
        switch(tabIndex){
            case 0: setNumPlatos(menuPlatos.length); break;
            case 1: setNumPlatos(platoPricipal.length); break;
            case 2: setNumPlatos(platoVeganos.length); break; 
            case 3: setNumPlatos(platoPostres.length); break; 
        }
    };
    
    return(
        <div className='menu-container'>
            <div className='filtro-botones'>
                <button className={activeTab === 0 ? 'active-tab' : ''} onClick={()=>{setMostrar([true,true,true]), boton(0)}}>Todos</button>
                <button className={activeTab === 1 ? 'active-tab' : ''} onClick={()=>{setMostrar([true,false,false]), boton(1)}}>Pricipales</button>
                <button className={activeTab === 2 ? 'active-tab' : ''} onClick={()=>{setMostrar([false,true,false]), boton(2)}}>Veganos</button>
                <button className={activeTab === 3 ? 'active-tab' : ''} onClick={()=>{setMostrar([false,false,true]), boton(3)}}>Postres</button>
            </div>
            <div className="sub-menu">
                <div>
                    <h2>Comidas</h2>
                    <p> {numplatos} </p>
                </div>
                <p>Elige entre nuestra variedad semanal de platos. Cambiamos el menú cada lunes, así que si te gusta algo, pídelo antes de que acabe el domingo.</p>
            </div>
            {
                mostrar[0] == true ? <div className='box-one categoria-menu'>
                    <h2>Platos principales</h2> 
                    <div className='caja-todo'>
                        {
                            <ContenidoPlatos valor={platoPricipal}/>
                        }
                    </div>
                </div> : ''
            }
            {
                mostrar[1] == true ? <div className='box-two categoria-menu'>
                    <h2>Principales veganos<span></span></h2>
                    <div className='caja-todo'>
                        {
                            <ContenidoPlatos valor={platoVeganos}/>
                        }
                    </div>
                </div> : ''
            }
            {
                mostrar[2] == true ? <div className='box-three categoria-menu'>
                <h2>Postres<span></span></h2>
                <div className='caja-todo'>
                    {
                        <ContenidoPlatos valor={platoPostres}/>
                    }
                </div>
            </div> : ''
            }
        </div>
        )
}
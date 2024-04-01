import { Link } from 'react-router-dom'
import { BsCheckCircleFill, BsTrainLightrailFront} from "react-icons/bs";
import './home.css'
import {Menu} from './menu'
import {Dudas} from './acordeon_ayuda'

import { useContext, useState } from 'react'
import { Contexto } from '../../contexto'

import mesa from '../../assets/mas/mesa-knoweats.webp'

import paso1 from '../../assets/paso1.svg'
import paso2 from '../../assets/paso2.svg'
import paso3 from '../../assets/paso3.svg'
import tabla from '../../assets/tabla.svg'

import frame1 from '../../assets/frame/Frame_1.png'
import frame2 from '../../assets/frame/Frame_2.png'
import frame3 from '../../assets/frame/Frame_3.png'
import frame4 from '../../assets/frame/Frame_4.png'
import frame5 from '../../assets/frame/Frame_5.png'

import { Pasos } from '../../components/pasos/pasos'
import { Resena } from '../../layauts/home_resena/home_resena';
import { PideMas } from '../../layauts/home_pide_mas/pide_mas';
import { ContenidoPlatos } from '../../layauts/contenido_platos/platos';
import { BotonLink } from '../../components/boton/boton';
import { AcordeonDudas } from '../../components/dudas/dudas';


export function Home(){

    const check = '#5FB87A'
    const {menuPlatos} = useContext(Contexto)

    return(
        <>
        <div className="home-container">
            <div className="principal">
                <div className='principal-texto'>
                    <h1>Come sano <br/> todo la semana.</h1>
                    <ul className='lista-principal'>
                        <li><BsCheckCircleFill style={{color:`${check}`}}/>  Envíos a toda la península</li>
                        <li><BsCheckCircleFill style={{color:`${check}`}}/> Sin suscripciones, sin compromisos.</li>
                        <li><BsCheckCircleFill style={{color:`${check}`}}/> Tu comida de la semana en una entrega</li>
                        <li><BsCheckCircleFill style={{color:`${check}`}}/> Sin cocinar, sin limpiar… <b> ¡Listo en minutos!</b></li>
                    </ul>
                    <BotonLink ir='/menu' titulo='HAZ YA TU PEDIDO'/>
                </div>
                <div>
                    <img src={mesa} alt="imagen" />
                </div>
            </div>
            <div className="container-pasos">
                <h2>Come bien en tres pasos</h2>
                <div className="pasos">
                    <Pasos imagen={paso1} titulo='1. Elige' texto='Nuestros chefs cocinan para ti, una carta nueva cada semana.'/>
                    <Pasos imagen={paso2} titulo='2. Recibe' texto='Te lo enviamos a domicilio en transporte refrigerado.'/>
                    <Pasos imagen={paso3} titulo='3. Calienta' texto='u comida aguantará 8 días en tu nevera y la tendrás lista en 3 minutos.'/>
                </div>
                <BotonLink ir='/menu' titulo='A COMER SANO'/>
            </div>
        </div>
        <div className="container-menu-inicio">
            <h2>Tienes que probar</h2>
            <div className="caja-card">
                { menuPlatos ? <ContenidoPlatos valor={menuPlatos}/> : 'no existe'}
            </div>
            <BotonLink ir='/menu' titulo='VER TODOS'/>
        </div>
        <marquee scrolldelay="100" start="50"> "¡Más que comida!  ·  Somos plastic neutral  ·  +1500kg de plástico recogidos del mar  ·  Gravity Wave certificate  ·  ¡Más que comida!  ·  Somos plastic neutral  ·  +1500kg de plástico recogidos del mar  ·  Gravity Wave certificate  ·  ¡Más que comida!  ·  Somos plastic neutral  ·  +1500kg de plástico recogidos del mar  ·  Gravity Wave certificate  ·  ¡Más que comida!  ·  Somos plastic neutral  ·  +1500kg de plástico recogidos del mar  ·  Gravity Wave certificate  ·"</marquee>
        <div className='home-container'>
            <Resena/>
            <section className="vida-facil">
                <p>¿LISTO PARA RECUPERAR TU TIEMPO?</p>
                <h2>Hacemos tu vida más fácil</h2>
                <img src={tabla} alt="" />
            </section>
            <PideMas/>
            <section className="section-dudas">
                <div className="duda-titulo">
                    <p>TE AYUDAMOS EN LO QUE NECESITES</p>
                    <h2>¿Alguna duda?</h2>
                </div>
                {
                <AcordeonDudas valor={Dudas} />
                }
                
            </section>
            <section className="frame">
                <img src={frame5} alt="logo-bussness" />
                <img src={frame4} alt="logo-bussness" />
                <img src={frame2} alt="logo-bussness" />
                <img src={frame3} alt="logo-bussness" />
                <img src={frame1} alt="logo-bussness" />
            </section>
        </div>
        </>
        )
}
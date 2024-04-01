import { BsCheckCircleFill} from "react-icons/bs";
import taper from '../../assets/taper.jpg'
import { useState, useEffect } from "react";
import './pide_mas.css'

export function PideMas(){
    const check = '#5FB87A'
    let [num, setNum] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNum((prevCount) => (prevCount === 15 ? 1 : prevCount + 1));
        }, 333);
    
        return () => clearInterval(intervalId);
    }, []);
    return(
        <section className="pide-mas">
                <div>
                    <h5> <i>AHORA CON KNOWEATS...</i> </h5>
                    <h2>Pide más, paga menos.</h2>
                    <p>Obtén descuentos en cada unos de tus pedidos, cuanto más platos añadas, mayor será tu descuento...</p>
                    <ul className='lista-principal pide-lista'>
                        <li><BsCheckCircleFill style={{color:`${check}`}}/> A partir de<b> 8 platos:</b> obtén un <b> 5%</b> de descuento.</li>
                        <li><BsCheckCircleFill style={{color:`${check}`}}/> A partir de<b> 12 platos: 8%</b> de descuento. </li>
                        <li><BsCheckCircleFill style={{color:`${check}`}}/> A partir de<b> 18 platos: 10%</b> de descuento. </li>
                    </ul>
                    <p style={{marginBottom:'10px'}}>Sigue asi! Agrega mas para obtener un descuento</p>
                    <div className="bara">
                        <div className="bara-up">
                            <p>{num}/15</p>
                        </div>
                        <div className='bara-porcentaje'>
                            <p>5% </p>
                            <p>8%</p>
                            <p>10%</p>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <img src={taper} alt="taper" />
                </div>
            </section>
    )
}
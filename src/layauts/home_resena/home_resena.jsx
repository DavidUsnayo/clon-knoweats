import {Comentarios} from '../../pages/home/comentarios'
import {BsPatchCheckFill, BsGoogle, BsStarFill } from "react-icons/bs";
import { useState } from 'react';
import './home_resena.css'

export function Resena(){
    const [altura, setAltura] = useState('100px')

    function mostrarMas(e){
        if(e.target.parentNode.style.height == '100px'){
            e.target.parentNode.style.height='200px'
            e.target.parentNode.children[2].textContent = 'Ver menos'
        }else{
            e.target.parentNode.style.height='100px'
            e.target.parentNode.children[2].textContent = 'Mostrar mas'
        }
    }
    return(
        <section className='section-coments'>
                {
                    Comentarios.map((coment,index)=>{
                        return(
                            <div className='resena' key={index}>
                                <div className='comentario'style={{height:'100px'}}>
                                    <div>
                                        <p><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/>< BsPatchCheckFill style={{color:'rgb(39, 200, 250)'}} /></p> 
                                        <BsGoogle style={{color:'red'}}/>
                                    </div>
                                    <p>{coment.resena}</p>
                                    <h5 onClick={(e)=>mostrarMas(e)}>Mostrar mas</h5>
                                </div>
                                <div className='perfil-usuario'>
                                    <div className='circle'></div>
                                    <div className='usuario'>
                                        <h3> {coment.nombre} </h3>
                                        <p>Hace {coment.hace} semanas</p>
                                    </div>
                                </div>
                                
                            </div>
                            )
                    })
                }
            </section>
    )
}
import {BsTrainLightrailFront} from "react-icons/bs";
import { useContext, useState } from 'react'
import { Contexto } from '../../contexto'

import './platos.css'

export function ContenidoPlatos({valor}){
    const {menuPlatos, setMenuPlatos} = useContext(Contexto)

    function agregarProducto(e,i){
        console.log(menuPlatos[valor[i].id].agregado)
        setMenuPlatos(menuPlatos => {
            menuPlatos[valor[i].id].cantidad++;
            menuPlatos[valor[i].id].agregado = true
            return [...menuPlatos];
        });
    }

    function sumarProducto(e,i){
        e.stopPropagation()
        setMenuPlatos(menuPlatos => {
            menuPlatos[valor[i].id].cantidad++;
            return [...menuPlatos];
        });
    }

    function restarProducto(e,i){
        e.stopPropagation()
        setMenuPlatos(menuPlatos => {
            menuPlatos[valor[i].id].cantidad--;
            if(menuPlatos[valor[i].id].cantidad <= 0){
                menuPlatos[valor[i].id].agregado = false
            }
            return [...menuPlatos];
        });
    }

    return(
        <>
            {
                valor.map((item,i)=>{
                    item.categoria == 'principal'
                    return(
                        <div key={i} className='card'>
                            <div className='cardImage'>
                                <img src={item.imagen} alt="imagen" />
                            </div>
                            <div className='cardContent'>
                                <h2 className='itemTitulo'> {item.titulo} </h2>
                                <div className="gramos">
                                    <p> ({item.gramos}) </p>
                                    <div>
                                        {
                                            item.iconos.map((icon,i)=>{
                                                return(
                                                <div className='cat' key={i}>
                                                    <BsTrainLightrailFront/>
                                                </div>)
                                            })
                                        }
                                    </div>
                                </div>
                                <h2> {item.precio} € </h2>
                                {
                                    item.tabla.map((e,i)=>{
                                        return(
                                            <div key={i} className="tabla-nutricional">
                                                <div>
                                                    <h4> {e.calorias} </h4>
                                                    <p>Calorias</p>
                                                </div>
                                                <div>
                                                    <h4> {e.proteinas}g </h4>
                                                    <p>Proteinas</p>
                                                </div>
                                                <div>
                                                    <h4> {e.carbohidratos}g </h4>
                                                    <p>Carbohidratos</p>
                                                </div>
                                                <div>
                                                    <h4> {e.grasas}g </h4>
                                                    <p>Grasas</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <button onClick={(e)=> agregarProducto(e,i)}>
                                    AGREGAR
                                    {
                                        menuPlatos[item.id].agregado == true ? <div className="sumar-producto" style={{}}>
                                        <section onClick={(e)=> sumarProducto(e,i)}>+</section>
                                            <p> {item.cantidad} </p>
                                        <section onClick={(e)=> restarProducto(e,i)}>-</section>
                                    </div> : ''
                                    }
                                    
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            </>
    )
}
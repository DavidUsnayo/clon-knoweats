import { Link } from 'react-router-dom'
import { BsPersonSquare,BsArchiveFill, BsList, BsArrowRight, BsXLg, BsTrash3} from "react-icons/bs";
import { useState, useRef, useContext, useEffect } from 'react';
import './navegacion.css'
import { Contexto } from '../../contexto';
export function Navegacion(){

    const {menuPlatos, setMenuPlatos} = useContext(Contexto)

    const menuAgregado = menuPlatos.filter(item => item.agregado == true)

    let [come, setCome] = useState('-150vh')
    let modal = useRef()
    let [total, setTotal] = useState(0)
    let [check, setCheck] = useState('-150px')

    useEffect(() => {
        let sumaPrecios = 0;
        menuAgregado.forEach(item => {
            sumaPrecios += item.precio * item.cantidad;
        });
        setTotal(sumaPrecios);
    }, [menuAgregado]);

    function sumarProducto(e,i){
        e.stopPropagation()
        setMenuPlatos(menuPlatos => {
            menuPlatos[i].cantidad++;
            return [...menuPlatos];
        });
    }

    function restarProducto(e,i){
        e.stopPropagation()
        setMenuPlatos(menuPlatos => {
            menuPlatos[i].cantidad--;
            if(menuPlatos[i].cantidad <= 0){
                menuPlatos[i].agregado = false
            }
            return [...menuPlatos];
        });
    }

    function borraTodo(){
        setMenuPlatos(menuPlatos => {
            menuPlatos.map((item,i)=>{
                item.cantidad = 0
                item.agregado = false
            })
            return [...menuPlatos];
        });
    }

    function finalizarPedido(){
        setCheck('0px'); 
        setTimeout(()=>{
            setCheck('-150px')
        },2000);
        modal.current.style.display='none'; 
        borraTodo()
    }

    return(
        <div className='menu'>
            <div className="menu-content">
                <div className='hamburger' onClick={(e)=> {come == '-150vh' ? setCome('0vh'):setCome('-150vh')}}>
                    {come == '-150vh' ? <BsList/> : <BsXLg />}
                    <div className='menu-movil' style={{left:come}} >
                        <Link to="/menu"> <p>Menu de la semana</p> <BsArrowRight/> </Link>
                        <Link to="/como_funciona"> <p>Como funciona</p> <BsArrowRight/> </Link>
                        <Link to="/quienes_somos"> <p>Quienes somos?</p> <BsArrowRight/> </Link>
                        <Link to="/FAQs"> <p>FAQs</p> <BsArrowRight/></Link>
                        <div className='inico-sesion'>
                            <Link to="/sesion">CREAR CUENTA</Link> 
                            <Link to="/sesion">INCIAR SESION</Link>
                        </div>
                    </div>
                    
                </div>
                <div className='link-logo' onClick={()=>setCome('-150vh')}>
                    <Link to='/'>Knoweats!</Link>
                </div>
                <div className='links-navegacion'>
                    <Link to="/menu">Menu de la semana</Link>
                    <Link to="/como_funciona">Como funciona</Link>
                    <Link to="/quienes_somos">Quienes somos?</Link>
                    <Link to="/FAQs">FAQs</Link>
                </div>
                <div className='perfil-sesion'>
                    <Link to="/sesion"><BsPersonSquare className='person'/></Link>
                    <BsArchiveFill className='carro' onClick={()=> {modal.current.style.display='block';}}/>
                    <div className='modal' ref={modal} onClick={()=> {modal.current.style.display='none'}}>
                        <div className="content-modal" onClick={(e)=> e.stopPropagation()}>
                            <div className='flex'>
                                <h3>Tu pedido</h3>
                                <p onClick={()=> {modal.current.style.display='none'}}> <BsXLg /> </p>
                            </div>
                            <div className='flex cantidad-carro'>
                                <h4>Cantidad <span>{menuAgregado.length}</span> </h4>
                                <p onClick={()=> borraTodo()}>Borrar todo</p>
                            </div>
                            <div className='pedido'>
                            {
                                menuAgregado.length == 0 ? 
                                <div className='carro-vacio'>
                                    <h2>Tu carrito esta vacío</h2>
                                </div> :
                                menuAgregado.map((e,i)=>{
                                    return(
                                        <div className='producto-carrito' key={i}>
                                            <img src={e.imagen} />
                                            <div className='info-producto' >
                                                <div>
                                                    <h4> {e.titulo} </h4>
                                                    <BsTrash3 onClick={()=>{
                                                        console.log(e.id)
                                                        setMenuPlatos(menuPlatos => {
                                                            menuPlatos[e.id].agregado = false;
                                                            menuPlatos[e.id].cantidad = 0;
                                                            return [...menuPlatos];
                                                        });
                                                        console.log(menuPlatos)
                                                    } }/>
                                                </div>
                                                <div>
                                                    <p className='precio'> {e.precio} €</p>
                                                    <section>
                                                        <button onClick={(it)=> sumarProducto(it,e.id) }>+</button>
                                                        <p> {e.cantidad} </p>
                                                        <button onClick={(it)=> restarProducto(it,e.id) }>-</button>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <div className='comprar-productos'>
                                <p className='codigo'>Tienes un codigo de descuento?  +</p>
                                <hr />
                                <div>
                                    <p>Subtotal</p>
                                    <h2> {total.toFixed(2)} €</h2>
                                </div>
                                <button onClick={()=>finalizarPedido()}>FInalizar Pedido</button>
                                <p className='haz'>Haz pedido de lunes a domingo y <span>recibe el martes siguiente</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='compra-hecha' style={{top:check}}>
                        <h2>Compra Realizada</h2>
                </section>
            </div>
        </div>
        )
}
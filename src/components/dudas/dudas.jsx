
import './dudas.css'
export function AcordeonDudas({valor}){

    return(
        valor.map((com,i)=>{
            return(
                <details key={i} className='detalles'>
                    <summary> <p>{com.titulo}</p> <p>+</p></summary>
                    <p className='res'> {com.res} </p>
                </details>
            )
        })
    )
}
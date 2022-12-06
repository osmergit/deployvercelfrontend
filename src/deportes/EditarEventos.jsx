import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI2 = 'https://g10eventos.herokuapp.com/usuarios/upevent/'

const URI= 'https://g10eventos.herokuapp.com/usuarios/shevents/'
export const CompEditEvento = () => {
    const [fecha, setFecha] = useState('')    
    const [equipo1, setEquipo1] = useState('')
    const [equipo2, setEquipo2] = useState('')   
    const [marcador1, setMarcador1] = useState('')   
    const [marcador2, setMarcador2] = useState('') 
    const [tipoevento, setTipoevento] = useState('')        
    const navigate = useNavigate()
    const {_id} = useParams()

    //procedimiento para actualizar
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.put(URI2+_id, { fecha: fecha, equipo1: equipo1, equipo2: equipo2, marcador1: marcador1, marcador2: marcador2, tipoevento: tipoevento })
        navigate('/sheventos')
    }

   

    const getBlogById = async () => {
        const res = await axios.get(URI+_id)
        setFecha(res.data.fecha)
        setEquipo1(res.data.equipo1)
        setEquipo2(res.data.equipo2)
        setMarcador1(res.data.marcador1)
        setMarcador2(res.data.marcador2)
        setTipoevento(res.data.tipoevento)
    }
    useEffect( ()=>{
        getBlogById()
    },[ ] )
    return (
        <div>
            <h3>Editar Evento</h3>
            <form>
                <div>
                    <label>fecha</label>
                    <input
                        value={fecha}
                        onChange={ (e)=> setFecha(e.target.value)}
                        type="text"
                    />
                </div>
                <div>
                    <label> equipo1</label>
                    <input
                        value={equipo1}
                        onChange={ (e)=> setEquipo1(e.target.value)}
                        type="text"
                    />
                </div>    
                <div>
                    <label> equipo2</label>
                    <input
                        value={equipo2}
                        onChange={ (e)=> setEquipo2(e.target.value)}
                        type="text"               
                    />
                </div>  
                <div>
                    <label> marcador1 </label>
                    <input
                        value={marcador1}
                        onChange={ (e)=> setMarcador1(e.target.value)}
                        type="text"              
                    />
                </div>  
                <div>
                    <label> marcador2</label>
                    <input
                        value={marcador2}
                        onChange={ (e)=> setMarcador2(e.target.value)}
                        type="text"                   
                    />
                </div>  
                <div>
                    <label> tipoevento</label>
                    <input
                        value={tipoevento}
                        onChange={ (e)=> setTipoevento(e.target.value)}
                        type="text"                   
                    />
                </div>  
                
                <button type="submit" onClick={ onSubmit} > Actualizar </button>
        </form>
    </div>
    )

}

export default CompEditEvento
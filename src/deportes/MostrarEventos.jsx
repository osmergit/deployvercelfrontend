import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Swal from 'sweetalert2';
import Card from 'react-bootstrap/Card';
import img1 from '../img/paisaje2.jpg'
const URI = 'https://g10eventos.herokuapp.com/usuarios/shevents'
const URI2 = 'https://g10eventos.herokuapp.com/usuarios/delevent/'

export const CompShowEventos= () => {
const token1 = localStorage.getItem("auth")
const token = `${token1}`;
const beer = "Bearer"
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'accept': 'application/json',
      //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njk0NjcxMzgsImV4cCI6MTY2OTQ2ODkzOH0.Dp0FfAN_taNOtPRhOGeAB7nQZvMvzVddPhN4TKb3JJo',
     'Authorization': `${beer} ${token}`,
    }
};

    const [ceventos, setEventos] = useState([])
   
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los registros
    const getBlogs = async () => {
        const res = await axios.get(URI,axiosConfig)
        setEventos(res.data)
    }

    //procedimineto para eliminar un registro
    const deleteBlog = async (_id) => {
        //insertar la validación con Alert

      
       Swal.fire({
        title: 'Advertencia',
        text: 'Esta ud seguro de eliminar el evento?',
        icon: 'question',
        showDenyButton: true,
        denyButtonText: "NO",
        confirmButtonText: "SI",
       }).then(response => {
        if(response.isConfirmed){
            axios.delete(`${URI2}${_id}`)
            Swal.fire("El evento se elimino con exito")
            getBlogs()
        }else{
            Swal.fire("Seleccione el evento a eliminar")
        }
       })

       
    }

    return(
      
        <div >
            <div >
                <div >
                  
           
                    <center>
                    <Card   style={{ width: '50rem' }} >
                         <Card.Body>
                         <Card.Img src={img1} alt="Card image" />
                        <Card.ImgOverlay>
                         <Card.Text>
                         <Link to="/regevento" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i>Crear Evento Deportivo</Link>
                      
                    <Table striped bordered hover size="sm" >
                        <thead >
                            <tr>
                                <th>Fecha</th>
                                <th>Equipo 1</th>
                                <th>Equipo 2</th>
                                <th>Marcador E1</th>
                                <th>Marcador E2</th>
                                <th>Tipo evento</th>
                            </tr>
                        </thead>
                        <tbody>
                            { ceventos.map ( (blog) => (
                                <tr key={ blog._id}>
                                    <td > { blog.fecha } </td>
                                    <td > { blog.equipo1 } </td>
                                    <td > { blog.equipo2 } </td>
                                    <td > { blog.marcador1 } </td>
                                    <td > { blog.marcador2 } </td>
                                    <td > { blog.tipoevento } </td>
                                    <td>
                                        <Link to={`/editevento/${blog._id}`} className=''><i className="fas fa-edit"></i>edit</Link>
                                        <button onClick={ ()=>deleteBlog(blog._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i>Eliminar</button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </Table>
                    </Card.Text>
                    </Card.ImgOverlay>
                    </Card.Body>
                    </Card>
                    </center>
     
     
                </div>    
            </div>
        </div>
        
    )

}

export default CompShowEventos
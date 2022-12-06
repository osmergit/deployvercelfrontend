import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
const URI = 'https://g10eventos.herokuapp.com/usuarios/shuser/'


export const CompShowUsers = () => {

    const token1 = localStorage.getItem("auth")
const token = `${token1}`;
const beer = "Bearer"

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'accept': 'application/json',
     // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Z57-5Z11leFfQS8qBytP88FNdtvshyQQhuvJvBTNE0w',
     'Authorization': `${beer} ${token}`,
    }
};
    
    const [users, setBlog] = useState([])
   
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los registros
    const getBlogs = async () => {
        const res = await axios.get(URI,axiosConfig)
        setBlog(res.data)
    }

    //procedimineto para eliminar un registro
    const deleteBlog = async (_id) => {
       await axios.delete(`${URI}${_id}`)
       getBlogs()
    }

    return(
        <div >
            <div >
                <div >
                    <Link to="/create" className=''>crear</Link>
                    <Table striped bordered hover>
                        <thead >
                            <tr>
                                <th>Nombre</th>
                                <th>Correo</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            { users.map ( (blog) => (
                                <tr key={ blog._id}>
                                    <td > { blog.nomuser } </td>
                                    <td > { blog.correo } </td>
                                   
                                    <td>
                                        <Link to={`/edit/${blog._id}`} className=''><i className="fas fa-edit"></i>edit</Link>
                                        <button onClick={ ()=>deleteBlog(blog._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i>Eliminar</button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </Table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowUsers
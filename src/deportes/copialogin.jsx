import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import styles from "./styles.module.css";



export const Login = () => {

    useEffect ( ()=>{
       // mostraralert()
        },[])

        const mostraralert = () => {
            Swal.fire({
                title: 'Su correo y contraseña son correctos',
                text: 'Ud desea continuar',
                icon: 'ok',
                confirmButtonText: 'Continuar'
               
              })
        }


    const [body, setBody] = useState({ correo: '', password: '' })
    const navigate  = useNavigate()
   // const classes = useStyles()

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }


    //********** */
       const onSubmit = async (e) => {
        e.preventDefault();
        try{

            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    
                }
              };
            const URI = 'https://g10eventos.herokuapp.com/usuarios/login'
        console.log("paso por aca")
        const resp = await axios.post(URI, body, axiosConfig );
        mostraralert()
    let s = JSON.stringify(resp?.data);

            let union1 = s.split(":")[2];
  
             let r = union1.substring(1, union1.length-3);
                  console.log('Este es el JWT:',r);
                 localStorage.setItem('auth',r)
                if (mostraralert)
                {
                 navigate('/sheventos')
                 window.location = '/sheventos'
                }


                
            
        }
        catch(error)  {
                navigate('/login')
               window.location = '/login'
                console.log(error)
                console.log("Paso por abajo")
            }
        }
 

	return (
		
        <div >
        <h3>Login</h3>
         <Form >
             <input
               
                 autoFocus
                 type= "text"
                 placeholder = "Correo"
                 value= {body.correo}
                 onChange= { inputChange }
                 name= "correo"
             />
             <input type="password"
                 placeholder = "Password"
                 value={body.password}
                 onChange={inputChange}
                 name="password"
             />
             <button onClick={onSubmit} type="submit" >
                 Sign In
             </button>
             <Link to="/create" >Sign Up</Link>
         </Form>
     </div>

	);
};

export default Login;

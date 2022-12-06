import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
//import styles from "./styles.module.css";



export const Login = () => {

    useEffect ( ()=>{
       //mostraralert()
        },[])

        const mostraralert = () => {
            Swal.fire({
                title: 'Su correo y contraseña son correctos',
                text: 'Ud desea continuar',
                icon: 'warning',
                showDenyButton: "NO",
                confirmButtonText: "SI",
                
               
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
		
        <div className="login-form" >
       <h3>Login</h3>
        <Card>
      <Card.Body>
     
        <Card>
      <Card.Body>
      
         
         <Form >
         <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control
               
                 autoFocus
                 type= "text"
                 placeholder = "Correo"
                 value= {body.correo}
                 onChange= { inputChange }
                 name= "correo"
             />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Control type="password"
                 placeholder = "Password"
                 value={body.password}
                 onChange={inputChange}
                 name="password"
             />
             </Form.Group>
             <Button variant="secondary" onClick={onSubmit} type="submit" >
                 Sign In
             </Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button as="a" variant="warning"> <Link to="/create" >Sign Up</Link> </Button>
            
         </Form>
         </Card.Body>
         </Card>
         </Card.Body>
    </Card>
     </div>

	);
};

export default Login;

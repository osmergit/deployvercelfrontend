import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, Outlet} from 'react-router-dom';



export const NavbarComp = () => {

return (
  
 <>  
  <Navbar className="navBg" expand="lg" variant="dark" >
      <Container>
        <Navbar.Brand href="#home">Qatar 2022</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to={'/sheventos'}>Mostrar Eventos</Nav.Link>
            <Nav.Link as = {Link} to={`/regevento`}>Registrar Evento</Nav.Link>
            <NavDropdown title="Usuarios" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/create"}>Registrar</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to={"/users"} > Mostrar </NavDropdown.Item>
             <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/login"} href="#ed" >
                Login
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/editevento/:_id"} >Editar Evento</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Abaut
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
          <Outlet>

          </Outlet>
  </section>
  </>  





)}


export default NavbarComp 

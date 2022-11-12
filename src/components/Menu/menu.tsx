import {Navbar,Container,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
 const Menu = ()=>{
    return (
        <>
             <Navbar expand="lg" bg="light" variant="light">
                <Container>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/movies-in-theaters" as={NavLink} >Movies in Theatres</Nav.Link>
                        <Nav.Link to="/movies-coming" as={NavLink}>Coming soon</Nav.Link>
                        <Nav.Link to="/top-rated-india" as={NavLink}>Top rated Indian</Nav.Link>
                        <Nav.Link to="/top-rated-movies" as={NavLink}>Top rated Movies</Nav.Link>
                        <Nav.Link to="/favourites" as={NavLink}>Favourites</Nav.Link>
                    </Nav>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        </>
    
    )   ;   
}
console.log(Menu);
export default Menu;
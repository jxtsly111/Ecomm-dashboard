import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';

function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate();
    function logout() {
        localStorage.clear();
        navigate('/register')
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">E-comm</Navbar.Brand>
                    <Nav className="mr-auto navbar_wrapper">
                        {
                            localStorage.getItem("user-info") ?
                                <>
                                    <Nav.Link as={Link} to="/">Product List</Nav.Link>
                                    <Nav.Link as={Link} to="/add">Add Products</Nav.Link>
                                    <Nav.Link as={Link} to="/update">Update Product</Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                </>
                        }
                        </Nav>
                        {
                            localStorage.getItem("user-info") ?
                            <Nav>
                            <NavDropdown title={user && user.name}>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            :null
                        }
                       
                    

                </Container>
            </Navbar>
        </div>
    );
}

export default Header;

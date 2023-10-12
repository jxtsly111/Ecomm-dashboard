import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">E-comm</Navbar.Brand>
                    <Nav className="mr-auto navbar_wrapper">
                        {
                            localStorage.getItem("user-info") ?
                                <>
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
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;

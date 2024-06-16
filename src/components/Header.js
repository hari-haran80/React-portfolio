import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Designer from '../assets/Designer.jpeg'; 

const Header = () => {
    return (
        <>
            <div className='HearderMain'>
                <Navbar className='Header-background' data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home" className='Logo'><img src={Designer} alt="Profile" className="LogoImage" /></Navbar.Brand>
                            <Nav className="me-Right">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;

import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.png";

function Header() {
    return (
        <Navbar className="bg-body-tertiary" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={Logo}
                        width="120"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;

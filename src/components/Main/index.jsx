import React from "react";
import Container from "react-bootstrap/Container";
import "./index.css";

function Main({ children }) {
    return (
        <main>
            <Container>{children}</Container>
        </main>
    );
}

export default Main;

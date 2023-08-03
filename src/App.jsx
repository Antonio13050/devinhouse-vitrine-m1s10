import Header from "./components/Header/index";
import FormNovoMedicamento from "./components/FormularioNovoMedicamento/index";
import Main from "./components/Main";
import CardMedicamento from "./components/CardMedicamento";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useContext, useState } from "react";
import { MedicamentosContext } from "./context/MedicamentosContext";

function App() {
    const { listaMedicamentos } = useContext(MedicamentosContext);

    return (
        <>
            <Header />
            <Main>
                <div className="py-3">
                    <h3>Formulário de Cadastro de Medicamentos</h3>
                </div>
                <FormNovoMedicamento />
                <div className="py-3">
                    <h3>Todos os Medicamentos</h3>
                </div>

                <Row>
                    {listaMedicamentos.map((medicamento) => (
                        <Col key={medicamento.id}>
                            <CardMedicamento medicamento={medicamento} />
                        </Col>
                    ))}
                </Row>
            </Main>
        </>
    );
}

export default App;

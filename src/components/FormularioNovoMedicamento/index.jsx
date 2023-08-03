import { useContext, useState } from "react";
import { MedicamentosContext } from "../../context/MedicamentosContext";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import "./index.css";

function FormNovoMedicamento() {
    const { adicionarMedicamento } = useContext(MedicamentosContext);

    const [nome, setNome] = useState("");
    const [laboratorio, setLaboratorio] = useState("");
    const [preco, setPreco] = useState(0);

    const handleSubmit = (event) => {
        adicionarMedicamento();
        setNome("");
        setLaboratorio("");
        setPreco(0);
    };

    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formGroupName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Informe o nome do medicamento"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </Form.Group>
                <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formGroupLaboratory"
                >
                    <Form.Label>Laboratório</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Informe o nome do laboratório"
                        value={laboratorio}
                        onChange={(e) => setLaboratorio(e.target.value)}
                    />
                </Form.Group>
                <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formGroupPrice"
                >
                    <Form.Label>Preço</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Informe o preço"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </Form.Group>
                <Form.Group
                    as={Col}
                    className="mb-3 formGroupButton"
                    controlId="formGroupButton"
                >
                    <Button type="submit" onClick={handleSubmit}>
                        Cadastrar novo
                    </Button>
                </Form.Group>
            </Row>
        </Form>
    );
}

export default FormNovoMedicamento;

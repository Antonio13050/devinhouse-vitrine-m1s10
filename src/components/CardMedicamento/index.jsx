import { useContext } from "react";
import { MedicamentosContext } from "../../context/MedicamentosContext";

import "./index.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardMedicamento({ medicamento }) {
    const { favoritarMedicamento } = useContext(MedicamentosContext);
    return (
        <>
            <Card className="mb-3 px-3 card" style={{ width: "18rem" }}>
                <Card.Header className="d-flex justify-content-end">
                    <Button
                        variant="primary"
                        onClick={() => favoritarMedicamento(medicamento.id)}
                    >
                        Favorito: {medicamento.favorito.toString()}
                    </Button>
                </Card.Header>
                <Card.Img
                    variant="top"
                    src="https://img.freepik.com/vetores-premium/frasco-de-medicamento-em-branco-com-caixa-realista_134452-15.jpg?w=2000"
                    alt="Imagem do medicamento"
                />
                <Card.Body className="d-flex align-items-center flex-column">
                    <Card.Title className="title">
                        Medicamento: {medicamento.nome}
                    </Card.Title>
                    <Card.Text className="text">
                        Laboratório: {medicamento.laboratorio}
                    </Card.Text>
                    <Card.Title>Preço: R$ {medicamento.preco}</Card.Title>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardMedicamento;

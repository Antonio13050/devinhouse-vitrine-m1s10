import { createContext, useState } from "react";

export const MedicamentosContext = createContext();

export const MedicamentosContextProvider = ({ children }) => {
    const [listaMedicamentos, setListaMedicamentos] = useState(
        JSON.parse(localStorage.getItem("listaMedicamentos")) || []
    );

    const adicionarMedicamento = (nome, laboratorio, preco) => {
        const novoMedicamento = {
            id: listaMedicamentos.length + 1,
            nome: nome,
            laboratorio: laboratorio,
            preco: preco,
            favorito: false,
        };

        const novaLista = [...listaMedicamentos, novoMedicamento];

        setListaMedicamentos(novaLista);

        localStorage.setItem("listaMedicamentos", JSON.stringify(novaLista));
        alert("Medicamento cadastrado com sucesso!");
    };

    const favoritarMedicamento = (id) => {
        const lista = listaMedicamentos.map((medicamento) => {
            if (medicamento.id == id) {
                medicamento.favorito = !medicamento.favorito;
            }
            return medicamento;
        });
        setListaMedicamentos(lista);
    };
    return (
        <MedicamentosContext.Provider
            value={{
                listaMedicamentos,
                adicionarMedicamento,
                favoritarMedicamento,
            }}
        >
            {children}
        </MedicamentosContext.Provider>
    );
};

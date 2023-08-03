import { createContext, useState } from "react";

export const MedicamentosContext = createContext();

export const MedicamentosContextProvider = ({ children }) => {
    const [listaMedicamentos, setListaMedicamentos] = useState(
        JSON.parse(localStorage.getItem("listaMedicamentos")) || []
    );

    const adicionarMedicamento = () => {
        console.log("adicionar");
        localStorage.setItem(
            "listaMedicamentos",
            JSON.stringify(listaMedicamentos)
        );
    };

    const favoritarMedicamento = () => {
        console.log("favoritar");
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

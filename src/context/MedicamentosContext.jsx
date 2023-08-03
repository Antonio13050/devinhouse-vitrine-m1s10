import { createContext } from "react";

export const MedicamentosContext = createContext();

export const MedicamentosContextProvider = ({ children }) => {
    const adicionarMedicamento = () => {
        console.log("adicionar");
    };
    return (
        <MedicamentosContext.Provider value={{ adicionarMedicamento }}>
            {children}
        </MedicamentosContext.Provider>
    );
};

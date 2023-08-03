import Header from "./components/Header/index";
import FormNovoMedicamento from "./components/FormularioNovoMedicamento/index";
import Main from "./components/Main";

function App() {
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
            </Main>
        </>
    );
}

export default App;

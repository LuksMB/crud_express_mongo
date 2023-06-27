import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMenu from "./MyMenuV1";
import { Container } from "@mui/material";

import CadastrarProfessor from "./professor/Cadastrar";
import ListarProfessor from "./professor/Listar";
import EditarProfessor from "./professor/Editar";

import CadastrarAluno from "./aluno/Cadastrar";
import ListarAluno from "./aluno/Listar";
import EditarAluno from "./aluno/Editar";
import Aprovados from "./aluno/Aprovados"

import LoginPage from "./LoginPage";
import { useEffect, useState } from "react";

const MainPage = () => {

    //afterLogin feito para poder receber a alteração de estado do componente filho
    const [afterLogin, setAfterLogin] = useState(false)


    //UseEffect para re-renderização das rotas no momento que o afterLogin for alterado pela LoginPage
    useEffect(
        () => {
            
        },
        [afterLogin]
    )

    //Rotas disponibilizadas alternadamente com o valor de afterLogin
    const validarLogin = () => {
        if (afterLogin === true) {
            return (
                <BrowserRouter>
                    <MyMenu />
                    <Container sx={{ mt: 4 }}>
                        <Routes>
                            <Route path="cadastrarProfessor" element={<CadastrarProfessor />} />
                            <Route path="listarProfessor" element={<ListarProfessor />} />
                            <Route path="editarProfessor/:id" element={<EditarProfessor />} />
                        </Routes>
                        <Routes>
                            <Route path="cadastrarAluno" element={<CadastrarAluno />} />
                            <Route path="listarAluno" element={<ListarAluno />} />
                            <Route path="listarAprovados" element={<Aprovados />} />
                            <Route path="editarAluno/:id" element={<EditarAluno />} />
                        </Routes>
                    </Container>
                </BrowserRouter>
            )
        } else {
            return (
                <BrowserRouter>
                    <LoginPage setAfterLogin={setAfterLogin}/>
                </BrowserRouter>
            )
        }
    }

    return (
        <>
            {validarLogin()}
        </>
    )
}

export default MainPage;
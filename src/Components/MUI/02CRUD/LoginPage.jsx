import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//setAfterLogin passado pelo componente pai para alternar uma variável de estado de fora do componente, alternando a renderização das rotas
const LoginPage = ({ setAfterLogin }) => {

    const navigate = useNavigate()

    const [user, setUser] = useState("jorginho");
    const [senha, setSenha] = useState("vazio");


    //HandleSubmit criado para que os dados sejam enviados como corpo para o serviço do post de login, onde é feita a validação do usuário e senha.
    const handleSubmit = (event) => {
        event.preventDefault();
        const dados = { user, senha }
        console.log(dados)
        axios.post(
            "http://localhost:3001/conta/login",
            dados
        )
            .then((res) => {
                //Tratamento da Promise oriunda do axios, onde em caso de correspôndencia do login, ele retorna true, modificando o valor do afterLogin do componente pai e fazendo a alteração da renderização do mesmo. 
                setAfterLogin(res.data.res)
                if(res.data.res){
                    alert("Login bem-sucedido!")
                    navigate("/listarAluno")
                } else {
                    alert("Dados inválidos, tente novamente!")
                }
                
            })
            .catch((err) => console.log(err))
    }

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    marginTop: 8
                }}
                component="form"
                onSubmit={handleSubmit}
            >
                <Typography
                    component="h1"
                    variant="h4"
                >
                    Login
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Usuário"
                    id="user"
                    name="user"
                    onChange={(event) => {
                        setUser(event.target.value);
                    }}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth

                    label="Senha"
                    id="senha"
                    name="senha"
                    type="password"
                    onChange={(event) => {
                        setSenha(event.target.value);
                    }}
                />

                <Button
                    sx={{ my: 2 }}
                    fullWidth
                    variant="contained"
                    type="submit"
                >
                    Entrar
                </Button>
            </Box>
        </Container>
    )
}

export default LoginPage;
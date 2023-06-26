import { Typography, TextField, Box, Button, Container } from "@mui/material"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cadastrar = () => {

    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [ira, setIra] = useState("0.0");

    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();
        const novoAluno = {nome, curso, ira}
        axios.post(
            "http://localhost:3001/aluno/registrar",
            novoAluno
        )
        .then((res)=>{
            alert("Aluno ID " + res.data._id + " adicionado!")
            navigate("/listarAluno")
        })
        .catch((err)=>console.log(err))
    }

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

            }}
        >
            <Typography
                variant="h5"
                fontWeight="bold"
            >
                Cadastrar Aluno
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    onChange={(event) => {
                        setNome(event.target.value);
                    }}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    name="curso"
                    label="Curso"
                    onChange={(event) => {
                        setCurso(event.target.value);
                    }}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    name="ira"
                    label="IRA"
                    type="number"
                    inputProps={{
                        maxLength: 10,
                        step: "0.1"
                    }}
                    onChange={(event) => {
                        setIra(parseFloat(event.target.value));
                    }}
                />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            my: 3
                        }}
                    >
                        Cadastrar
                    </Button>
                </Box>

            </Box>
        </Container>
    )
}

export default Cadastrar;
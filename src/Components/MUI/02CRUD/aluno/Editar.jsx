import { Typography, TextField, Box, Button, Container } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Editar = () => {

    let {id} = useParams()
    let navigate = useNavigate()

    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [ira, setIra] = useState("0.0");

    useEffect(
        () => {
            axios.get(`http://localhost:3001/aluno/recuperar/${id}`)
            .then(
                (res) => {
                    setNome(res.data.nome)
                    setCurso(res.data.curso)
                    setIra(res.data.ira)
                }
            )
            .catch((err)=>console.log(err))
        },
        []
    )

    const handleSubmit = (event) => {
        event.preventDefault();

        const alunoAtualizado = {nome, curso, ira};

        axios.put(
            `http://localhost:3001/aluno/atualizar/${id}`,
            alunoAtualizado
        )
        .then((res)=>{
            alert("Aluno ID " + id + " atualizado!")
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
                Editar Aluno
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
                    value={nome}
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
                    value={curso}
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
                        Atualizar
                    </Button>
                </Box>

            </Box>
        </Container>
    )
}

export default Editar;
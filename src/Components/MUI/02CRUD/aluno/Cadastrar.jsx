import { Typography, TextField, Box, Button, Container, MenuItem, InputLabel, FormControl, Select } from "@mui/material"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cadastrar = () => {

    const [nome, setNome] = useState("");

    //Curso criado da mesma forma que antes, só tendo o valor alterado posteriormente
    const [curso, setCurso] = useState("SI")
    const [ira, setIra] = useState("0.0");

    const navigate = useNavigate()


    //HandleSubmit funcionando da mesma maneira, pois o curso é alterado individualmente pelo FormControl
    const handleSubmit = (event) => {
        event.preventDefault();
        const novoAluno = { nome, curso, ira }
        axios.post(
            "http://localhost:3001/aluno/registrar",
            novoAluno
        )
            .then((res) => {
                alert("Aluno ID " + res.data._id + " adicionado!")
                navigate("/listarAluno")
            })
            .catch((err) => console.log(err))
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

                <FormControl
                    fullWidth
                    sx={{
                        mt: 2
                    }}

                >
                    {/* Select feito com FormControl e InputLabel, onde as opções já são mostradas pelos MenuItems e ainda enviadas para o post por meio do setCurso no onChange do Select */}
                    <InputLabel id="select-curso-label">
                        Curso
                    </InputLabel>
                    <Select
                        labelId="select-curso-label"
                        label="Curso"
                        value={curso}
                        onChange={(event) => {
                            setCurso(event.target.value)
                        }}
                    >
                        <MenuItem value="CC">CC</MenuItem>
                        <MenuItem value="SI">SI</MenuItem>
                        <MenuItem value="DD">DD</MenuItem>
                        <MenuItem value="ES">ES</MenuItem>
                        <MenuItem value="EC">EC</MenuItem>
                        <MenuItem value="RC">RC</MenuItem>

                    </Select>
                </FormControl>

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
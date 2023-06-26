import { Typography, TextField, Box, FormControl, InputLabel, Select, MenuItem, Button, Container, FormLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cadastrar = () => {

    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [titulo, setTitulo] = useState("GRAD");
    const [ai, setAi] = useState({es: false, al: false, ds: false, mc: false})

    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();
        const novoProfessor = {nome, curso, titulo, ai}
        axios.post(
            "http://localhost:3001/professor/registrar",
            novoProfessor
        )
        .then((res)=>{
            alert("Professor ID " + res.data.id + " adicionado!")
            navigate("/listarProfessor")
        })
        .catch((err)=>console.log(err))
    }

    const handleCheckbox = (event) => {
        setAi({
            ...ai,
            [event.target.name]:event.target.checked
        })
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
                Cadastrar Professor
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
                <Box>
                    <FormControl
                        fullWidth
                        sx={{
                            mt: 2
                        }}

                    >
                        <InputLabel id="select-tit-label">
                            Titulação
                        </InputLabel>
                        <Select
                            labelId="select-tit-label"
                            label="Titulação"
                            value={titulo}
                            onChange={(event) => {
                                setTitulo(event.target.value)
                            }}
                        >
                            <MenuItem value="GRAD">Graduação</MenuItem>
                            <MenuItem value="MEST">Mestrado</MenuItem>
                            <MenuItem value="DOUT">Doutorado</MenuItem>

                        </Select>
                    </FormControl>

                    <FormControl
                        component="fieldset"
                        variant="standard"
                        sx={{
                            my: 3
                        }}
                    >
                        <FormLabel
                            component="legend"
                            sx={{
                                fontSize: 12,
                                mb: 2
                            }}
                        >
                            Áreas de Interesse
                        </FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={ai.es} name="es" onChange={handleCheckbox}/>}
                                label="Engenharia de Software"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={ai.al} name="al" onChange={handleCheckbox}/>}
                                label="Algoritmos"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={ai.ds} name="ds" onChange={handleCheckbox}/>}
                                label="Desenvolvimento de Software"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={ai.mc} name="mc" onChange={handleCheckbox}/>}
                                label="Matemática Computacional"
                            />
                        </FormGroup>

                    </FormControl>
                </Box>

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
import { Typography, TextField, Box, FormControl, InputLabel, Select, MenuItem, Button, Container, FormLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Editar = () => {

    let {id} = useParams()
    let navigate = useNavigate()

    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [titulo, setTitulo] = useState("");
    const [ai, setAi] = useState({es: false, al: false, ds: false, mc: false})

    useEffect(
        () => {
            axios.get(`http://localhost:3001/professor/recuperar/${id}`)
            .then(
                (res) => {
                    setNome(res.data.nome)
                    setCurso(res.data.curso)
                    setTitulo(res.data.titulo)
                    setAi(res.data.ai)
                }
            )
            .catch((err)=>console.log(err))
        },
        []
    )

    // const getProfessorById = (id) => {
    //     for (let i = 0; i< professores.length; i++){
    //         if (professor[i].id == id){
    //             return professores[i];
    //         }
    //     }
    //     return null;
    // }

    const handleSubmit = (event) => {
        event.preventDefault();

        const professorAtualizado = {nome, curso, titulo, ai};

        axios.put(
            `http://localhost:3001/professor/atualizar/${id}`,
            professorAtualizado
        )
        .then((res)=>{
            alert("Professor ID " + id + " atualizado!")
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
                Editar Professor
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
                        Atualizar
                    </Button>
                </Box>

            </Box>
        </Container>
    )
}

export default Editar;
import { Typography, TextField, Box, FormControl, InputLabel, Select, MenuItem, Button, Container, FormLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Editar = () => {

    let {id} = useParams()
    let id_prof = id;

    const professores = [
        { id: 0, nome: "Camila Belmont", curso: "SI", titulo: "MEST", ai: {es: true, al: false, ds: true, mc: false} },
        { id: 1, nome: "Vitin do Iôiô", curso: "SI", titulo: "DOUT", ai: {es: false, al: false, ds: false, mc: false}},
        { id: 2, nome: "Abner Gripe", curso: "SI", titulo: "GRAD", ai: {es: false, al: false, ds: false, mc: false} },
        { id: 3, nome: "Geovane", curso: "ES", titulo: "GRAD", ai: {es: false, al: false, ds: false, mc: false} },
        { id: 4, nome: "Vito Corleone", curso: "EC", titulo: "DOUT", ai: {es: false, al: false, ds: false, mc: false} }
    ]

    const getProfessorById = (id) => {
        for (let i = 0; i< professores.length; i++){
            if (professores[i].id == id){
                return professores[i];
            }
        }
        return null;
    }

    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [titulo, setTitulo] = useState("");
    const [ai, setAi] = useState({es: false, al: false, ds: false, mc: false})

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(nome);
        console.log(curso);
        console.log(titulo);
        console.log(ai)
    }

    const handleCheckbox = (event) => {
        setAi({
            ...ai,
            [event.target.name]:event.target.checked
        })
    }


    useEffect(
        () => {
            setNome(getProfessorById(id_prof).nome);
            setCurso(getProfessorById(id_prof).curso);
            setTitulo(getProfessorById(id_prof).titulo);
            setAi(getProfessorById(id_prof).ai);
        }, 
        []
    )

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
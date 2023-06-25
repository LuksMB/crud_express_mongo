import { Typography, TextField, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const Cadastrar = () => {
    return(
        <>
            <Typography 
                variant="h5"
                fontWeight="bold"
            > 
                Cadastrar Aluno
            </Typography>
            <Box>
                <TextField 
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                />
                <TextField 
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    name="curso"
                    label="Curso"
                />
                <FormControl fullWidth sx={{mt: 2}}>
                    <InputLabel id="select-tit-label">
                        Titulação
                    </InputLabel>
                    <Select
                        labelId="select-tit-label"
                        label="Titulação"
                    >
                        <MenuItem value="GRAD">Graduação</MenuItem>
                        <MenuItem value="MEST">Mestrado</MenuItem>
                        <MenuItem value="DOUT">Doutorado</MenuItem>

                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default Cadastrar;
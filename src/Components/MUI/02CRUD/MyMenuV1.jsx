import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import Face2Icon from '@mui/icons-material/Face2';
import { useState } from "react";
import { Link } from "react-router-dom";

const MyMenu = () => {
    
    const [anchorElProf, setAnchorElProf] = useState(null);

    const handleOpenAnchorElProf = (e) => {
        setAnchorElProf(e.currentTarget)
    }

    const handleCloseAnchorElProf = () => {
        setAnchorElProf(false)
    }

    const [anchorElAluno, setAnchorElAluno] = useState(null);

    const handleOpenAnchorElAluno = (e) => {
        setAnchorElAluno(e.currentTarget)
    }

    const handleCloseAnchorElAluno = () => {
        setAnchorElAluno(false)
    }

    const dropProfMenu = () => {
        return (
            <Box>
                <Button 
                    sx={{
                        color:"white",
                        my: 2,
                        fontFamily: "Comic Sans MS"
                    }} 
                    onClick={handleOpenAnchorElProf}
                >
                    Professores
                </Button>
                <Menu
                    anchorEl={anchorElProf}
                    open={
                        Boolean(anchorElProf)
                    }
                    onClose={handleCloseAnchorElProf}
                >
                    <MenuItem
                        onClick={() => {
                            handleCloseAnchorElProf()
                        }}
                        component={Link}
                        to={"cadastrarProfessor"}
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleCloseAnchorElProf()
                        }}
                        component={Link}
                        to={"listarProfessor"}
                    >
                        Listar
                    </MenuItem>
                </Menu>
            </Box>
        )
    }
    
    const dropAlunoMenu = () => {

        return(
            <Box>
            <Button sx={{
                color:"white",
                my: 2,
                fontFamily: "Comic Sans MS"
            }}
            onClick={handleOpenAnchorElAluno}
            >
                Alunos
            </Button>
            <Menu
                anchorEl={anchorElAluno}
                open={
                    Boolean(anchorElAluno)
                }
                onClose={handleCloseAnchorElAluno}
            >
                <MenuItem
                    onClick={
                        () => {
                            handleCloseAnchorElAluno()
                        }
                    }
                    component={Link}
                    to={"cadastrarAluno"}
                >
                    Cadastrar
                </MenuItem>
                <MenuItem
                    onClick={
                        () => {
                            handleCloseAnchorElAluno()
                        }
                    }
                    component={Link}
                    to={"listarAluno"}
                >
                    Listar
                </MenuItem>
                <MenuItem
                    onClick={
                        () => {
                            handleCloseAnchorElAluno()
                        }
                    }
                    component={Link}
                    to={"listarAprovados"}
                >
                    Aprovados
                </MenuItem>

            </Menu>

        </Box>
        )
       
    }
    
    
    
    return(
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Face2Icon
                        sx={{
                            display: "flex",
                            mr: 1
                        }}
                    />
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration: "none",
                            color:"white",
                            fontFamily: "Comic Sans MS",
                            letterSpacing: ".3rem",
                            width: "60%",
                            fontWeight: 100,
                            fontSize: 20
                        }}
                    >
                        CRUD.V1
                    </Typography>
                    <Box sx={{
                            ml: 4,
                            display: "flex",
                            width: "100%",
                            justifyContent: "flex-end"
                    }}>

                        {dropProfMenu()}

                        {dropAlunoMenu()}

                        <Button sx={{
                            color:"white",
                            my: 2,
                            fontFamily: "Comic Sans MS"
                        }}>
                            Sobre
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MyMenu;
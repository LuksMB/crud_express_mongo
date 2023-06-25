import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import Face2Icon from '@mui/icons-material/Face2';

const MyMenu = () => {
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
                        Gerenciador de Myllas.V0
                    </Typography>
                    <Box sx={{
                            ml: 4,
                            display: "flex",
                            width: "100%",
                            justifyContent: "flex-end"
                        }}>
                        <Button sx={{
                            color:"white",
                            my: 2,
                            fontFamily: "Comic Sans MS"
                        }}>
                            Professores
                        </Button>
                        <Button sx={{
                            color:"white",
                            my: 2,
                            fontFamily: "Comic Sans MS"
                        }}>
                            Alunos
                        </Button>
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
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";

const SignIn = () => {
    return(
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    marginTop: 8
                }}
            >
                <Typography
                    component="h1"
                    variant="h4"
                >
                    Sign In
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth

                    label="Endereço de Email"
                    id="email"
                    name="email"
                    type="email"
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth

                    label="Senha"
                    id="password"
                    name="password"
                    type="password"
                />

                <Button
                    sx={{my: 2}}
                    fullWidth
                    variant="contained"
                >
                    Entrar
                </Button>

                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                >
                    <Link 
                        underline="none"
                        href="https://img.r7.com/images/meme-sorriso-forcado-hide-the-pain-harold-maurice-andras-arato-08112019141225487?dimensions=1000x1000"
                    >
                        Alzheimer?
                    </Link>
                    <Link 
                        underline="none"
                        href="https://media.tenor.com/yKFj5_1A95UAAAAC/grinch-face-jim-carey.gif"
                    >
                        Primeira vez? ¬¬
                    </Link>
                </Box>

            </Box>

             
        </Container>
    )
}

export default SignIn;
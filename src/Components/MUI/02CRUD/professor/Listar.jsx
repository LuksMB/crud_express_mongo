import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Delete, Edit, WindowTwoTone } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Link } from "react-router-dom";
import { useState } from "react";

const Listar = () => {

    // const professores = [
    //     { id: 0, nome: "Camila Belmont", curso: "SI", titulo: "MEST" },
    //     { id: 1, nome: "Vitin do Iôiô", curso: "SI", titulo: "DOUT" },
    //     { id: 2, nome: "Abner Gripe", curso: "SI", titulo: "GRAD" },
    //     { id: 3, nome: "Geovane", curso: "ES", titulo: "GRAD" },
    //     { id: 4, nome: "Vito Corleone", curso: "EC", titulo: "DOUT" }
    // ]

    const [professores, setProfessores] = useState([])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const deleteProfessor = (id) => {
        if(window.confirm("Deseja mesmo apagar esse(a) professor(a) do banco de dados?")){
            alert("Professor(a) " + professores[id].nome + " apagado(a) com sucesso!")
        }
    }


    return (
        <>
            <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    my: 2
                }}
            >
                Professores
            </Typography>

            <TableContainer
                component={Paper}
            >
                <Table
                    sx={{
                        minWidth: 650
                    }}
                    aria-label="simple-table"
                >
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>TITULAÇÃO</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {
                            professores.map(
                                (prof) => {
                                    return (
                                        <StyledTableRow key={prof.id}>
                                            <StyledTableCell>{prof.id}</StyledTableCell>
                                            <StyledTableCell>{prof.nome}</StyledTableCell>
                                            <StyledTableCell>{prof.curso}</StyledTableCell>
                                            <StyledTableCell>{prof.titulo}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton aria-label="edit" color="primary" component={Link} to={`/editarProfessor/${prof.id}`}>
                                                        <Edit />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" color="error" onClick={
                                                        () => {
                                                            deleteProfessor(prof.id);
                                                        }
                                                    }>
                                                        <Delete />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }
                    </TableBody>
                </Table>

            </TableContainer>
        </>

    )
}

export default Listar;
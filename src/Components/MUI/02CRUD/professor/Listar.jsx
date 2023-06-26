import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Delete, Edit } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Listar = () => {

    // const professores = [
    //     { id: 0, nome: "Camila Belmont", curso: "SI", titulo: "MEST" },
    //     { id: 1, nome: "Vitin do Iôiô", curso: "SI", titulo: "DOUT" },
    //     { id: 2, nome: "Abner Gripe", curso: "SI", titulo: "GRAD" },
    //     { id: 3, nome: "Geovane", curso: "ES", titulo: "GRAD" },
    //     { id: 4, nome: "Vito Corleone", curso: "EC", titulo: "DOUT" }
    // ]

    const [professores, setProfessores] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            axios.get("http://localhost:3001/professor/listar")
            .then(
                (res) => {
                    setProfessores(res.data)
                }
            )
            .catch((err)=>console.log(err))
        },
        []
    )

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
            axios.delete(
                `http://localhost:3001/professor/deletar/${id}`
            )
            .then((res)=>{
                const profs = professores.filter((prof)=>prof.id != id)
                setProfessores(profs)
                alert("Professor(a) apagado(a)!")
            })
            .catch((err)=>console.log(err))
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
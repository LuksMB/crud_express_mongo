import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Delete, Edit } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Listar = () => {

    const [alunos, setAlunos] = useState([])

    // Média adicionada como variável de estado para atualizar junto com a lista de alunos
    const [media, setMedia] = useState(0)


     // UseEffect para atualizar a média enquanto recebe os alunos do banco de dados via axios, média definida como variável em observação pelo Hook por conta do axios entregar uma promise
    useEffect(
        () => {
            axios.get("http://localhost:3001/aluno/listar")
            .then(
                (res) => {
                    setAlunos(res.data)

                    let media1 = 0;
                    for (let i = 0; i < alunos.length; i++){
                        media1 += alunos[i].ira
                    }
                    media1 = media1/alunos.length;
                    media1 = media1.toFixed(2);
                    setMedia(media1)                    
                }
            )
            .catch((err)=>console.log(err))
        },
        [media]
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

    const deleteAluno = (id) => {
        if(window.confirm("Deseja mesmo apagar esse(a) aluno(a) do banco de dados?")){
            axios.delete(
                `http://localhost:3001/aluno/deletar/${id}`
            )
            .then((res)=>{
                const alus = alunos.filter((aluno)=>aluno._id != id)
                setAlunos(alus)
                alert("Aluno(a) apagado(a)!")
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
                Alunos
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
                            <StyledTableCell>IRA</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {
                            alunos.map(
                                (aluno) => {
                                    //Toda a questão é feita aqui, no lugar de mostrar todos os valores de alunos, só serão mostrados aqueles com ira maior que a média, definição feita na própria função map
                                    if (aluno.ira >= media)
                                    return (
                                        <StyledTableRow key={aluno._id}>
                                            <StyledTableCell>{aluno._id}</StyledTableCell>
                                            <StyledTableCell>{aluno.nome}</StyledTableCell>
                                            <StyledTableCell>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.ira}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton aria-label="edit" color="primary" component={Link} to={`/editarAluno/${aluno._id}`}>
                                                        <Edit />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" color="error" onClick={
                                                        () => {
                                                            deleteAluno(aluno._id);
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
                        {/* Média adicionada fora do map com linha final após todas as tabelas */}
                        <StyledTableRow>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell sx={{
                                backgroundColor: "black",
                                color: "white"
                            }
                            }>MÉDIA</StyledTableCell>
                            <StyledTableCell>{media}</StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>

            </TableContainer>
        </>

    )
}

export default Listar;
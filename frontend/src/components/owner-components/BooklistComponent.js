import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchParkStatus, fetchBookList, postNewStatus, putBooking, deleteBooking } from "../../redux/OwnerActionCreators";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { Grid, CircularProgress, IconButton, Stack } from "@mui/material";
import AlertDialog from "../DialogComponent"

function BookList(props) {
    const { book_list, handleDeleteBooking, handlePutBooking, setIsChange } = props;
    function convertTime(time) {
        var date = new Date(Date.parse(time));
        return(date.getHours() + ':' + date.getMinutes() + '  ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());
    }

    // xóa một lượt đặt trước
    const deleteBooking = async (pending_id) => {
        await handleDeleteBooking(pending_id);
        setIsChange(true);
    }

    // xác nhận lượt đặt trước
    const putBooking = async (pending_id) => {
        await handlePutBooking(pending_id);
        setIsChange(true);
    }

    return (
        <div style={{ margin: "20px" }}>
            <Grid align='center' style={{ color: "#22577E", marginBottom: "30px" }}>
                <h3 style={{ fontWeight: "bolder" }}>Các xe đặt trước bãi đỗ</h3>
            </Grid>
            <Paper style={{ maxHeight: 800, overflow: 'auto' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="booking list table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="left">Tài khoản</TableCell>
                                <TableCell align="left">Người đặt trước</TableCell>
                                <TableCell align="right">Số điện thoại</TableCell>
                                <TableCell align="center">Thời gian gửi</TableCell>
                                <TableCell align="center">Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {book_list.map((row) => (
                                <TableRow
                                    key={row.pending_id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        {row.pending_id}
                                    </TableCell>
                                    <TableCell align="left">{row.username}</TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="right">{row.phone}</TableCell>
                                    <TableCell align="center">{convertTime(row.time_start)}</TableCell>
                                    <TableCell align="center">
                                        <Stack spacing={2} direction="row">
                                            <AlertDialog
                                                title={"Xóa"}
                                                content={row.name + " đã không đến bãi đỗ của bạn để gửi xe?"}
                                                label={"Xóa"}
                                                color={"warning"}
                                                handleAction={() => deleteBooking(row.pending_id)} />
                                            <AlertDialog
                                                title={"Xác nhận"}
                                                content={row.name + " đã đến gửi xe tại bãi đỗ của bạn"}
                                                label={"Xác nhận"}
                                                color={"success"}
                                                handleAction={() => putBooking(row.pending_id)} />
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

export default React.memo(BookList);
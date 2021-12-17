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
import BookList from "./BooklistComponent";

function ParkStatus(props) {
    const { park_status, book_list, postNewStatus, setIsChange } = props;
    const iniFreeNum = (park_status.total_space - park_status.total_in - book_list.length);
    const [freeNum, setFreeNum] = useState(iniFreeNum);

    useEffect(() => {
        setFreeNum(iniFreeNum)
    }, [iniFreeNum])

    // thêm hay bớt xe trong bãi đỗ
    const handleChangeStatus = async (value) => {
        await postNewStatus(park_status.park_id, value);
        setFreeNum(park_status.total_space - park_status.total_in - book_list.length);
        setIsChange(true);
    }
    return (
        <div style={{ margin: "20px" }}>
            <Grid align='left' style={{ color: "#22577E", marginBottom: "30px" }}>
                <h3 style={{ fontWeight: "bolder" }}>Quản lý trạng thái</h3>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>Sức chứa: {park_status.total_space}</Grid>
                <Grid item xs={12}>
                    Số lượng xe hiện tại:
                    {park_status.total_in > 0 ?
                        (<IconButton color="success" aria-label="close" size="large"
                            onClick={() => handleChangeStatus(false)} >
                            <i class="far fa-minus-square"></i>
                        </IconButton>) :
                        (<IconButton color="success" aria-label="close" size="large" >
                            <i class="far fa-minus-square"></i>
                        </IconButton>)}
                    {park_status.total_in}
                    {park_status.total_in < (park_status.total_space - book_list.length) ?
                        (<IconButton color="success" aria-label="close" size="large"
                            onClick={() => handleChangeStatus(true)} >
                            <i class="far fa-plus-square"></i>
                        </IconButton>)
                        : (<IconButton color="success" aria-label="close" size="large" >
                            <i class="far fa-plus-square"></i>
                        </IconButton>)}
                </Grid>
                <Grid item xs={12}>Số lượng xe đặt trước: {book_list.length}</Grid>
                <Grid item xs={12}>Số chỗ trống: {freeNum}</Grid>
            </Grid>
        </div>
    );
}



const mapStateToProps = state => {
    return {
        book_list: state.book_list,
        owner_park_status: state.owner_park_status
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBookList: (park_id) => dispatch(fetchBookList(park_id)),
    fetchParkStatus: (park_id) => dispatch(fetchParkStatus(park_id)),
    postNewStatus: (park_id, value) => dispatch(postNewStatus(park_id, value)),
    putBooking: (pending_id) => dispatch(putBooking(pending_id)),
    deleteBooking: (pending_id) => dispatch(deleteBooking(pending_id))
});

function OwnerParkStatus(props) {
    const { id } = useParams();
    const [isChange, setIsChange] = useState(false);
    useEffect(() => {
        props.fetchBookList(id);
        props.fetchParkStatus(id);
    }, [id])

    useEffect(() => {
        if (isChange == true) {
            props.fetchBookList(id);
            props.fetchParkStatus(id);
            setIsChange(false)
        }
    }, [isChange])

    
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every 30 second!');
            props.fetchBookList(id);
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    if (props.book_list.isLoading || props.owner_park_status.isLoading) {
        return (
            <div>
                <CircularProgress />
            </div>
        );
    } else if (props.book_list.errMess || props.owner_park_status.errMess) {
        return (
            <div>
                <h4>{props.book_list.errMess}</h4>
                <h4>{props.owner_park_status.errMess}</h4>
            </div>
        );
    } else if (props.book_list.book_list != null && props.owner_park_status.owner_park_status != null) {
        return (
            <div>
                <Grid align='center' style={{ color: "#22577E", margin: "40px" }}>
                    <h1 style={{ fontWeight: "bolder" }}>ID: {props.owner_park_status.owner_park_status.park_id} - {props.owner_park_status.owner_park_status.name}</h1>
                </Grid>
                <div className='row'>
                    <div className="col-1"></div>
                    <div className="col-3">
                        <ParkStatus
                            park_status={props.owner_park_status.owner_park_status}
                            book_list={props.book_list.book_list}
                            postNewStatus={props.postNewStatus}
                            setIsChange={setIsChange} />
                    </div>
                    <div className="col-8">
                        <BookList
                            book_list={props.book_list.book_list}
                            handlePutBooking={props.putBooking}
                            handleDeleteBooking={props.deleteBooking}
                            setIsChange={setIsChange} />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerParkStatus);
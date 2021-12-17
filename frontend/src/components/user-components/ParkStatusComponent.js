import { Button, Grid, styled, Paper, CircularProgress, Stack, Dialog } from "@mui/material";
import React from "react";
import AlertDialog from "../DialogComponent";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function RenderOpenTime({ isOpen, openTime }) {
    if (isOpen) {
        return (
            <div>Đang mở cửa: {openTime}</div>
        );
    } else {
        return (
            <div style={{ color: "red" }}>Đã đóng cửa: {openTime}</div>
        );
    }
}


function RenderParkStatus(props) {
    const { park_status, postBooking, search_info } = props;

    const handleSubmitBooking = (event) => {
        postBooking(park_status.park_id, search_info.timein)
    }
    function convertTime(time) {
        var date = time ? new Date(Date.parse(time)) : new Date(new Date().getTime() + 30*60000);
        return(date.getHours() + ':' + date.getMinutes() + ' ngày ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());
    }

    if (park_status != null) {
        return (
            <div style={{ marginLeft: "-20px" }}>
                <Grid container rowSpacing={3} columnSpacing={2} style={{ marginTop: "10px" }}>
                    <Grid item xs={6}>
                        <Item>
                            <h4><i class="fas fa-coins"></i> {park_status.price} đ</h4>
                            <p>Thành tiền</p>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <h4><i class="fas fa-route"></i> {park_status.distance}</h4>
                            <p>Khoảng cách</p>
                        </Item>
                    </Grid>
                </Grid>
                <div style={{ margin: "20px" }}><i class="fas fa-map-marker-alt"></i> {park_status.location}</div>
                <div style={{ margin: "20px", display: "flex" }}>
                    <i style={{ margin: "2px 3px 0px 0px" }} class="far fa-clock"></i>
                    <RenderOpenTime isOpen={park_status.isOpen} openTime={park_status.openTime} />
                </div>
                <Grid container rowSpacing={3} columnSpacing={2}>
                    <Grid item xs={7}>
                        <Item>Sức chứa</Item>
                    </Grid>
                    <Grid item xs={5}>
                        <Item>{park_status.totalSpace}</Item>
                    </Grid>
                    <Grid item xs={7}>
                        <Item>Số chỗ trống</Item>
                    </Grid>
                    <Grid item xs={5}>
                        <Item>{park_status.totalFreeSpace}</Item>
                    </Grid>
                </Grid>
                <div className="col offset-4" style={{ marginTop: "20px" }} >
                    <AlertDialog
                        title={"Xác định đặt chỗ"}
                        content={"Bạn chắc chắn muốn đặt chỗ tại bãi đỗ " + park_status.name + " vào lúc " + convertTime(search_info.timein)}
                        label={"Đặt chỗ"}
                        color={"success"}
                        handleAction={handleSubmitBooking} />
                </div>
            </div>
        );
    }
}

const ParkStatus = (props) => {
    if (props.park_status.isLoading) {
        return (
            <div>
                <CircularProgress color="success" />
            </div>
        );
    }
    else if (props.park_status.errMess) {
        return (
            <div>
                <h4>{props.errMess}</h4>
            </div>
        );
    }
    else if (props.park_status != null) {
        return (
            <RenderParkStatus
                park_status={props.park_status.park_status}
                postBooking={props.postBooking}
                search_info={props.search_info}
            />
        );
    }
}

export default ParkStatus;
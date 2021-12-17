import { connect } from "react-redux";
import { fetchOwnerParkInfo, fetchParkReview } from "../../redux/OwnerActionCreators";
import {
    ImageList, ImageListItem, Grid, Button, Rating, Avatar, ListItem,
    List, ListItemAvatar, ListItemText, Divider, Paper, CircularProgress
} from "@mui/material";
import { ListInlineItem } from "reactstrap";
import { baseImgUrl } from "../../shared/baseUrl";
import { useEffect, useState } from 'react';
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

function convert2digit(n) {
    return n > 9 ? "" + n: "0" + n;
}

function parseTime(time) {
    let hour = new Date(Date.parse(time)).getHours();
    let minute = new Date(Date.parse(time)).getMinutes();
    return convert2digit(hour) + ":" + convert2digit(minute);
}

const RenderParkInfo = (props) => {

    const { park_info, park_review } = props;
    const history = useHistory();
    const images_gallery = park_info.images.map((image) => ({
        original: `${baseImgUrl + image.img}`,
        thumbnail: `${baseImgUrl + image.img}`
    }));

    const rating_data = {
        labels: ["5 sao", "4 sao", "3 sao", "2 sao", "1 sao"],
        datasets: [
            {
                label: "Đánh giá",
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                data: [
                    park_review.rating_five,
                    park_review.rating_four,
                    park_review.rating_three,
                    park_review.rating_two,
                    park_review.rating_one,
                ]
            }
        ]
    }

    return (
        <div>
            <div style={{ margin: "20px" }}>
                <Grid align='center' style={{ color: "#22577E", marginBottom: "30px" }}>
                    <h1 style={{ fontWeight: "bolder" }}>ID: {park_info.id} - {park_info.name}</h1>
                </Grid>
                <div className="row" style={{ marginBottom: "20px" }}>
                    <div className="col-1"></div>
                    <div className="col-4">
                        <ImageGallery items={images_gallery} />
                    </div>
                    <div className="col-6">
                        <Grid container spacing={3}>
                            <Grid item xs={12}><h2>Thông tin chi tiết</h2></Grid>
                            <Grid item xs={12}><i class="fas fa-map-marker-alt"></i> {park_info.location}</Grid>
                            <Grid item xs={12}><i class="fas fa-car"></i> {park_info.total_space} xe</Grid>
                            <Grid item xs={12}><i class="fas fa-money-check-alt"></i> {park_info.price} VND</Grid>
                            <Grid item xs={12}>
                                <div style={{ display: "inline-flex" }}>
                                    {park_info.hasCamera == 1 && <div style={{ marginRight: "10px" }}><i class="fas fa-video"></i> CCTV</div>}
                                    {park_info.hasRoof == 1 && <div style={{ marginRight: "10px" }}><span class="iconify" data-icon="bx:bxs-car-garage"></span> Mái che</div>}
                                    {park_info.allowBooking == 1 && <div style={{ marginRight: "10px" }}><span class="iconify" data-icon="cib:hatena-bookmark"></span> Đặt trước</div>}
                                    {park_info.allowOvernight == 1 && <div><i class="fas fa-moon"></i> Gửi qua đêm</div>}
                                </div>
                            </Grid>
                            <Grid item xs={12}><i class="fas fa-file-medical"></i> {park_info.description}</Grid>
                            <Grid item xs={12}><i class="far fa-clock"></i> {park_info.allow24h ? ("Mở cửa 24/24") : ("Mở cửa từ: " + parseTime(park_info.open_time) + " - " + parseTime(park_info.close_time))}</Grid>
                            <Grid item xs={5}><Button variant="contained" color="success" onClick={() => history.push("/owner/edit/" + props.id)}> Chỉnh sửa thông tin</Button></Grid>
                        </Grid>
                    </div>
                    <div className="col-1"></div>
                </div>
                <Divider variant="inset" />
                {park_info.isActivated && 
                <Grid align='center' style={{ color: "#22577E", marginBottom: "30px", marginTop: "30px" }}>
                    <h2 style={{ fontWeight: "bolder" }}>Thông tin đánh giá</h2>
                </Grid>}
                {park_info.isActivated &&
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-2">
                        <Grid align='center' style={{ marginTop: "40px" }}>
                            <h1>{parseFloat(park_review.avg_rating).toPrecision(2)}</h1>
                            <Rating size="large" name="rating" value={parseFloat(park_review.avg_rating).toPrecision(2)} precision={0.1} readOnly />
                            <h6>{park_review.total_rating} lượt đánh giá</h6>
                        </Grid>
                    </div>
                    <div className="col-4">
                        <Bar
                            data={rating_data}
                            options={{
                                indexAxis: 'y',
                            }}
                        />
                    </div>
                    <div className="col-4">
                        <List sx={{ width: '100%' }}>
                            {park_review.comment.map((item) => {
                                return (
                                    <div>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                                <Avatar>{item.name[0]}</Avatar>
                                            </ListItemAvatar>
                                            <ListInlineItem>
                                                <ListItemText primary={item.name}
                                                    secondary={
                                                        <React.Fragment>
                                                            <Rating size="small" name="rating" value={item.rating} precision={0.1} readOnly />
                                                            <div>{item.content}</div>
                                                        </React.Fragment>
                                                    }
                                                />
                                            </ListInlineItem>
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </div>
                                );
                            })}
                        </List>
                    </div>
                    <div className="col-1"></div>
                </div> }
            </div>
        </div >
    );
}


const mapStateToProps = state => {
    return {
        owner_park_info: state.owner_park_info,
        owner_park_review: state.owner_park_review
    }
}

const mapDispatchToProps = dispatch => ({
    fetchOwnerParkInfo: (park_id) => dispatch(fetchOwnerParkInfo(park_id)),
    fetchParkReview: (park_id) => dispatch(fetchParkReview(park_id))
});

const ShowParkInfo = (props) => {

    const { id } = useParams();

    useEffect(() => {
        props.fetchOwnerParkInfo(id);
        props.fetchParkReview(id);
    }, [id])

    if (props.owner_park_info.isLoading || props.owner_park_review.isLoading) {
        return (
            <div>
                <CircularProgress />
            </div>
        );
    } else if (props.owner_park_info.errMess || props.owner_park_review.errMess) {
        return (
            <div>
                <h4>{props.owner_park_info.errMess}</h4>
                <h4>{props.owner_park_review.errMess}</h4>
            </div>
        );
    } else if (props.owner_park_review.owner_park_review != null && props.owner_park_info.owner_park_info != null) {
        return (
            <div>
                <RenderParkInfo
                    park_info={props.owner_park_info.owner_park_info}
                    park_review={props.owner_park_review.owner_park_review}
                    id={id} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowParkInfo);
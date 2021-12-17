import { ImageList, ImageListItem, CircularProgress } from "@mui/material";
import React from "react";
import { baseImgUrl } from "../../shared/baseUrl";


function CameraIcon({ hasCamera }) {
    if (hasCamera) {
        return (
            <div><i class="fas fa-video"></i> CCTV</div>
        );
    } else {
        return (
            <></>
        );
    }
}

function RoofIcon({ hasRoof }) {
    if (hasRoof) {
        return (
            <div><span class="iconify" data-icon="bx:bxs-car-garage"></span> Mái che</div>
        );
    } else {
        return (
            <></>
        );
    }
}

function ReserveIcon({ allowBooking }) {
    if (allowBooking) {
        return (
            <div><span class="iconify" data-icon="cib:hatena-bookmark"></span> Đặt trước</div>
        );
    } else {
        return (
            <></>
        );
    }
}

function OvernightIcon({ allowOvernight }) {
    if (allowOvernight) {
        return (
            <div><i class="fas fa-moon"></i> Gửi qua đêm</div>
        );
    } else {
        return (
            <></>
        );
    }
}

function RenderParkInfo({ park_info }) {
    if (park_info != null) {
        return (
            <div>
                <div style={{ paddingTop: "15px", display: "inline-flex" }}>
                    <div style={{ marginRight: "10px" }}><CameraIcon hasCamera={park_info.hasCamera} /></div>
                    <div style={{ marginRight: "10px" }}><RoofIcon hasRoof={park_info.hasRoof} /></div>
                    <div style={{ marginRight: "10px" }}><ReserveIcon allowBooking={park_info.allowBooking} /></div>
                    <div><OvernightIcon allowOvernight={park_info.allowOvernight} /></div>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <p>{park_info.description}</p>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <ImageList sx={{ width: 360 }} cols={3} rowHeight={134}>
                        {park_info.image.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={baseImgUrl + item.img}
                                    alt=""
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>
        );
    }
}

const ParkInfo = (props) => {
    if (props.isLoading) {
        return (
            <div>
                <CircularProgress color="success" />
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div>
                <h4>{props.errMess}</h4>
            </div>
        );
    }
    else if (props.park_info != null) {
        return (
            <RenderParkInfo park_info={props.park_info.park_info} />
        );
    }
}

export default ParkInfo;
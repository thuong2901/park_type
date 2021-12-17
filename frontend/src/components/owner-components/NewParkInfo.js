import React from 'react';
import { formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { postNewPark, postParkImages } from '../../redux/OwnerActionCreators';

import "react-widgets/styles.css";
import ParkInfoForm from './ParkInfoForm';

const parkInfo_selector = formValueSelector("park-info-form")

const mapStateToProps = state => {
    const { name, total_space, location, price, hasCamera, hasRoof, allowOvernight, allowBooking, description, open_time, close_time, allow24h }
        = parkInfo_selector(state, 'name', 'total_space', "location", "price", "hasCamera", "hasRoof", "allowOvernight", "allowBooking", "description", "open_time", "close_time", "allow24h");
    return {
        name,
        total_space,
        location, price,
        hasCamera,
        hasRoof,
        allowOvernight,
        allowBooking,
        description,
        open_time,
        close_time,
        allow24h
    }
}

const mapDispatchToProps = dispatch => ({
    postParkImages: (park_id, images) => dispatch(postParkImages(park_id, images)),
    postNewPark: (name, total_space, location, price, hasCamera, hasRoof, allowOvernight, allowBooking, description, open_time, close_time, allow24h) =>
        dispatch(postNewPark(name, total_space, location, price, hasCamera, hasRoof, allowOvernight, allowBooking, description, open_time, close_time, allow24h))
});


function NewParkInfo(props) {

    return (
        <ParkInfoForm
            typeForm={"Thêm bãi đỗ"}
            titleForm={"Tạo bãi đỗ mới"}
            postInfo={props.postNewPark}
            postImage={props.postParkImages}
            name={props.name}
            total_space={props.total_space}
            location={JSON.stringify(props.location)}
            price={props.price}
            hasCamera={Boolean(props.hasCamera)}
            hasRoof={Boolean(props.hasRoof)}
            allowOvernight={Boolean(props.allowOvernight)}
            allowBooking={Boolean(props.allowBooking)}
            description={props.description}
            open_time={props.open_time}
            close_time={props.close_time}
            allow24h={Boolean(props.allow24h)}
            is24hSelected={Boolean(props.allow24h)} />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(NewParkInfo);
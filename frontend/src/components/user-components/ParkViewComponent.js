import React, { useEffect } from "react";
import { Media, Row, Col } from "reactstrap";
import { useTheme } from "@emotion/react";
import ParkDetail from "./ParkDetailComponent";
import {
    fetchComments, fetchParkInfo, postComment, fetchParkStatus, postReport, fetchBestParks,
    fetchCheapParks, fetchNearParks, fetchSearchInfo, postBooking, postMark, fetchMark
} from "../../redux/UserActionCreators";
import { connect } from "react-redux";
import Map from "./Map";
import { postSearchInfo } from "../../redux/UserActionCreators";
import { googlemapKey } from "../../shared/baseUrl";
import { useHistory, useLocation } from "react-router-dom";



const mapStateToProps = state => {
    return {
        best_parks: state.best_parks,
        cheap_parks: state.cheap_parks,
        near_parks: state.near_parks,
        park_status: state.park_status,
        park_info: state.park_info,
        comments: state.comments,
        search_info: state.search_info,
        favo_mark: state.favo_mark
    }
}

const mapDispatchToProps = dispatch => ({
    postComment: (park_id, rating, comment) => dispatch(postComment(park_id, rating, comment)),
    postReport: (park_id, content) => dispatch(postReport(park_id, content)),
    fetchBestParks: (search_id) => dispatch(fetchBestParks(search_id)),
    fetchCheapParks: (search_id) => dispatch(fetchCheapParks(search_id)),
    fetchNearParks: (search_id) => dispatch(fetchNearParks(search_id)),
    fetchParkStatus: (park_id, search_id) => { dispatch(fetchParkStatus(park_id, search_id)) },
    fetchParkInfo: (park_id) => { dispatch(fetchParkInfo(park_id)) },
    fetchComments: (park_id) => { dispatch(fetchComments(park_id)) },
    postSearchInfo: (address, timein, timeout) => dispatch(postSearchInfo(address, timein, timeout)),
    fetchSearchInfo: (search_id) => dispatch(fetchSearchInfo(search_id)),
    postBooking: (park_id, timein) => dispatch(postBooking(park_id, timein)),
    postMark: (park_id, isMark) => dispatch(postMark(park_id, isMark)),
    fetchMark: (park_id) => dispatch(fetchMark(park_id))
});

function ParkView(props) {

    const theme = useTheme();
    const [selectedPark, setSelectedPark] = React.useState(-2);
    const [isPostComment, setIsPostComment] = React.useState(false);
    const [isPostMark, setIsPostMark] = React.useState(false);
    const history = useHistory();
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    const back = new URLSearchParams(search).get('back');

    useEffect(() => {
        setSelectedPark(id);
    }, [])

    useEffect(() => {
        if (isPostComment == true) {
            props.fetchComments(selectedPark);
            setIsPostComment(false);
        }
    }, [isPostComment])

    useEffect(() => {
        if (isPostMark == true) {
            props.fetchMark(selectedPark);
            setIsPostMark(false);
        }
    }, [isPostMark])

    useEffect(
        () => {
            if (selectedPark >= 0) {
                props.fetchParkStatus(selectedPark, localStorage.getItem('search_id'));
                props.fetchParkInfo(selectedPark);
                props.fetchComments(selectedPark);
                props.fetchMark(selectedPark);
            } else if (selectedPark == -1) {
                if (back) {
                    console.log(back);
                    history.push("/account/" + back);
                }
            }
        }, [selectedPark]
    )

    return (
        <div>
            <Row>
                <Col sm='4' xs='12'>
                    {
                        parseInt(selectedPark) >= 0 && <div>
                            <ParkDetail
                                park_status={props.park_status}
                                favo_mark={props.favo_mark}
                                postMark={props.postMark}
                                setIsPostMark={setIsPostMark}
                                search_info={props.search_info.search_info}
                                park_info={props.park_info}
                                comments={props.comments}
                                postComment={props.postComment}
                                postReport={props.postReport}
                                postBooking={props.postBooking}
                                setIsPostComment={setIsPostComment}
                                setSelectedPark={setSelectedPark} />
                        </div>
                    }
                </Col>
                <Col sm='8' xs='12'>
                    <div style={{paddingTop:"20px"}}>
                    <Map 
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=` + googlemapKey + `&&callback=initMap&v=weekly`}
                        loadingElement={<div style={{ height: `90%` }} />}
                        containerElement={<div style={{ height: `90vh`, margin: `auto` }} />}
                        mapElement={<div style={{ height: `90%` }} />}
                        setSelectedPark={setSelectedPark}
                        selectedPark={selectedPark}
                        search_info={props.search_info.search_info}
                    />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkView);
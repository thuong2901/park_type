import React, { useEffect } from "react";
import { AppBar, Tabs, styled, Paper } from "@mui/material";
import { Media, Row, Col } from "reactstrap";
import { useTheme } from "@emotion/react";
import { Tab } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import ParkDetail from "./ParkDetailComponent";
import {
    fetchComments, fetchParkInfo, postComment, fetchParkStatus, postReport, fetchBestParks,
    fetchCheapParks, fetchNearParks, fetchSearchInfo, fetchAllParks, postBooking, postMark, fetchMark
} from "../../redux/UserActionCreators";
import { connect } from "react-redux";
import { ParkList } from "./RenderParkListComponent";
import Map from "./Map";
import SearchInfoBar from "./SearchInfoComponent";
import { formValueSelector } from "redux-form";
import { postSearchInfo } from "../../redux/UserActionCreators";
import {googlemapKey} from "../../shared/baseUrl";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other} >
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    );
}

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    fontFamily: 'Nunito',
    '&:hover': {
        color: '#3E7C17',
        opacity: 1,
        fontWeight: "Bold",
    },
    '&.Mui-selected': {
        color: '#3E7C17',
        fontWeight: "Bolder",
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#d1eaff',
    },
}));

function allyProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const searchinfoBar_selector = formValueSelector("searchinfoBar-form")

const mapStateToProps = state => {
    const { address, timein } = searchinfoBar_selector(state, 'address', 'timein');
    return {
        best_parks: state.best_parks,
        cheap_parks: state.cheap_parks,
        near_parks: state.near_parks,
        park_status: state.park_status,
        park_info: state.park_info,
        comments: state.comments,
        address,
        timein,
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

function ParkListTabs(props) {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [selectedPark, setSelectedPark] = React.useState(-1);
    const [isPostComment, setIsPostComment] = React.useState(false);
    const [filter, setFilter] = React.useState({camera: true, roof: true, booking: true, overnight: true});
    const [isPostMark, setIsPostMark] = React.useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    }

    const handleSubmitSearch = async (event) => {
        event.preventDefault();
        var success = await props.postSearchInfo(props.address, props.timein);
        if (!success) {
            return;
        } else {
            localStorage.setItem('search_id', success.search_id);
        }
        if (selectedPark == -1) {
            props.fetchBestParks(localStorage.getItem('search_id'));
            props.fetchCheapParks(localStorage.getItem('search_id'));
            props.fetchNearParks(localStorage.getItem('search_id'));
        } else {
            setSelectedPark(-1);
        }
        props.fetchSearchInfo(localStorage.getItem('search_id'));
    }

    useEffect(
        () => {
            props.fetchSearchInfo(localStorage.getItem('search_id'));
        }, []
    )

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
            if (selectedPark < 0) {
                props.fetchBestParks(localStorage.getItem('search_id'));
                props.fetchCheapParks(localStorage.getItem('search_id'));
                props.fetchNearParks(localStorage.getItem('search_id'));
            }
            if (selectedPark >= 0) {
                props.fetchParkStatus(selectedPark, localStorage.getItem('search_id'));
                props.fetchParkInfo(selectedPark);
                props.fetchComments(selectedPark);
                props.fetchMark(selectedPark);
            }
        }, [selectedPark]
    )

    return (
        <div>
            <Row>
                <Col sm='4' xs='12'>
                    {parseInt(selectedPark) == -1 &&
                        <div class="park-list-tab">
                            <AppBar position="static" color="transparent">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="secondary"
                                    textColor="inherit"
                                    variant="fullWidth"
                                    aria-label="full width tabs" >
                                    <AntTab label="Tốt nhất" {...allyProps(0)} />
                                    <AntTab label="Rẻ nhất" {...allyProps(1)} />
                                    <AntTab label="Gần nhất" {...allyProps(2)} />
                                </Tabs>
                            </AppBar>
                            <Paper class="park-list-tab" style={{ maxHeight: 500, overflow: 'auto' }}>
                                <SwipeableViews
                                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={value}
                                    onChangeIndex={handleChangeIndex}
                                >
                                    <TabPanel value={value} index={0} dir={theme.direction}>
                                        <Media list>
                                            <ParkList parks={props.best_parks} selectedPark={selectedPark} setSelectedPark={setSelectedPark} filter={filter} />
                                        </Media>
                                    </TabPanel>
                                    <TabPanel value={value} index={1} dir={theme.direction}>
                                        <Media list>
                                            <ParkList parks={props.cheap_parks} selectedPark={selectedPark} setSelectedPark={setSelectedPark} filter={filter} />
                                        </Media>
                                    </TabPanel>
                                    <TabPanel value={value} index={2} dir={theme.direction}>
                                        <Media list>
                                            <ParkList parks={props.near_parks} selectedPark={selectedPark} setSelectedPark={setSelectedPark} filter={filter} />
                                        </Media>
                                    </TabPanel>
                                </SwipeableViews>
                            </Paper>
                        </div>
                    }
                    {
                        parseInt(selectedPark) >= 0 && <div>
                            <ParkDetail
                                park_status={props.park_status}
                                favo_mark={props.favo_mark}
                                postMark={props.postMark}
                                setIsPostMark={setIsPostMark}
                                timein={props.timein}
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
                    <SearchInfoBar handleSubmit={handleSubmitSearch}
                        search_info={props.search_info.search_info} 
                        setFilter={setFilter} />
                    <Map
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=` + googlemapKey + `&&callback=initMap&v=weekly`}
                        loadingElement={<div style={{ height: `90%` }} />}
                        containerElement={<div style={{ height: `90vh`, margin: `auto` }} />}
                        mapElement={<div style={{ height: `90%` }} />}
                        setSelectedPark={setSelectedPark}
                        selectedPark={selectedPark}
                        search_info={props.search_info.search_info}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkListTabs);
import { styled, Paper, Tab, Tabs, AppBar, IconButton } from "@mui/material";
import { Media } from "reactstrap";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@emotion/react";
import React from "react";
import ParkStatus from "./ParkStatusComponent";
import ParkInfo from "./ParkInfoComponent";
import ParkReview from "./ParkReviewComponent";

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
    fontSize: theme.typography.pxToRem(16),
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


const ParkDetail = (props) => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const { setSelectedPark, postMark, setIsPostMark } = props;
    const handleCloseParkDetail = () => {
        setSelectedPark(-1);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    }

    const handleChangeMark = async (value) => {
        await postMark(props.park_status.park_status.park_id, value);
        setIsPostMark(true);
    }

    return (
        <div>
            <div style={{ backgroundColor: "#E5E5E5", marginTop: "20px" }}>
                <div style={{ display: "flex" }}>
                    <div>
                        <IconButton color="success" aria-label="close" size="large"
                            onClick={handleCloseParkDetail} >
                            <i class="fas fa-arrow-circle-left"></i>
                        </IconButton>
                    </div>
                    <h3 style={{ margin: "10px", color: "#3E7C17", fontFamily: 'Nunito' }}>{props.park_status.park_status.name}</h3>
                    <div>
                        {!props.favo_mark.mark.isMark &&
                            <IconButton color="success" aria-label="close" size="large"
                                onClick={() => handleChangeMark(true)} >
                                <i class="far fa-star"></i>
                            </IconButton>}
                        {props.favo_mark.mark.isMark &&
                            <IconButton color="success" aria-label="close" size="large"
                                onClick={() => handleChangeMark(false)} >
                                <i class="fas fa-star"></i>
                            </IconButton>}
                    </div>
                </div>
                <AppBar position="static" color="transparent">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        variant="fullWidth"
                        aria-label="full width tabs" >
                        <AntTab label="Trạng thái" {...allyProps(0)} />
                        <AntTab label="Thông tin" {...allyProps(1)} />
                        <AntTab label="Đánh giá" {...allyProps(2)} />
                    </Tabs>
                </AppBar>
                <Paper style={{ maxHeight: 500, overflow: 'auto', backgroundColor: "#E5E5E5", margin: "10px 10px 0px 0px" }}>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Media list>
                                <ParkStatus
                                    park_status={props.park_status}
                                    postBooking={props.postBooking}
                                    search_info={props.search_info} />
                            </Media>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Media list>
                                <ParkInfo park_info={props.park_info} />
                            </Media>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <Media list>
                                <ParkReview comments={props.comments.comments}
                                    park_id={props.park_status.park_status.park_id}
                                    park_name={props.park_status.park_status.park_name}
                                    postComment={props.postComment}
                                    postReport={props.postReport}
                                    setIsPostComment={props.setIsPostComment} />
                            </Media>
                        </TabPanel>
                    </SwipeableViews>
                </Paper>
            </div>
        </div>
    );
}

export default ParkDetail;
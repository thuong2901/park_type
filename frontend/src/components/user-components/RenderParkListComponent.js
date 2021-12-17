import React from "react";
import { Rating, CardMedia, CardContent, Box, Card, ButtonBase, CircularProgress } from "@mui/material";
import { baseImgUrl } from '../../shared/baseUrl';
import { Media, } from "reactstrap";


function RenderParkCard({ park, selectedPark, setSelectedPark }) {
    const handleSelect = (id) => {
        setSelectedPark(id);
    }
    return (
        <div>
            <Card>
                <ButtonBase
                    style={{ textAlign: "initial", width: "100%", height: "100%" }}
                    onClick={() => handleSelect(park.id)} >

                    <CardMedia
                        className="col-5"
                        component="img"
                        sx={{ width: 150 }}
                        image={baseImgUrl + park.image}
                        alt={park.name} />

                    <Box className="col-7">
                        <CardContent>
                            <h5>{park.name}</h5>
                            <Box sx={{ display: 'flex' }}>
                                <Rating size="small" name="rating" value={park.rate} precision={0.1} readOnly />
                                <Box sx={{ ml: 1 }}>({park.numOfRate})</Box>
                            </Box>
                            <Box sx={{ display: 'flex' }} style={{ marginTop: "10px" }}>
                                <div>
                                    <h6><i class="fas fa-coins"></i> {park.price}</h6>
                                </div>
                                <div style={{ marginLeft: "20px" }}>
                                    <h6><i class="fas fa-route"></i> {park.distance}</h6>
                                </div>
                            </Box>
                        </CardContent>
                    </Box>
                </ButtonBase>
            </Card>
        </div >
    );
}

export const ParkList = (props) => {
    const { selectedPark, setSelectedPark } = props;
    React.useEffect(() => {
        console.log(props.filter);
    }, [props.filter])
    if (props.isLoading) {
        return (
            <div className="container">
                <CircularProgress color="success" />
            </div>
        );
    } else if (props.errMess) {
        return (
            <div className='container'>
                <h4>{props.errMess}</h4>
            </div>
        );
    } else {
        return (
            <div className="container">
                <Media list>
                    {props.parks.parks.map((park) => {
                        if ((props.filter.camera == true || park.hasCamera == true)
                            && (props.filter.roof == true || park.hasRoof == true)
                            && (props.filter.booking == true || park.allowBooking == true)
                            && (props.filter.overnight == true || park.allowOvernight == true))
                            return (
                                <div key={park.id} style={{ margin: "15px 0px 0px -70px" }}>
                                    <RenderParkCard park={park} selectedPark={selectedPark} setSelectedPark={setSelectedPark} />
                                </div>
                            );
                    })}
                </Media>
            </div>
        );
    }
}
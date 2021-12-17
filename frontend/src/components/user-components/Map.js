import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"
import {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete';
import { fetchAllParks } from "../../redux/UserActionCreators";
import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		all_parks: state.all_parks,
	}
}

const mapDispatchToProps = dispatch => ({
	fetchAllParks: () => dispatch(fetchAllParks())
});

function Map(props) {

	const [markers, setMarkers] = React.useState([]);
	const [coordinate, setCoordinate] = React.useState({lat: '', lng: ''});
	const [zoom, setZoom] = React.useState(14);
	const { search_info, selectedPark } = props

	React.useEffect(() => {
		props.fetchAllParks();
	}, []);

	React.useEffect(() => {
		setCoordinate({lat: search_info.lat, lng: search_info.lng});
		setZoom(14);
	}, [search_info]);

	React.useEffect(() => {
		markers.map(marker => {
			if (marker.park_id == selectedPark) {
				setCoordinate({lat: marker.lat, lng: marker.lng});
				setZoom(16);
			}
		})
	}, [selectedPark]);

	React.useEffect(() => {
		markers.map(marker => {
			if (marker.park_id == selectedPark) {
				setCoordinate({lat: marker.lat, lng: marker.lng});
				setZoom(16);
			}
		})
	}, [markers])
	
	React.useEffect(() => {
		props.all_parks.parks.map(park =>
			geocodeByAddress(park.location)
				.then(results => getLatLng(results[0]))
				.then(latLng => {
					const data = { park_id: park.park_id, lat: latLng.lat, lng: latLng.lng }
					setMarkers((prev) => [...prev, data]);
				})
				.catch(error => console.error('Error', error)));
	}, [props.all_parks.parks]);

	const handleClickMarker = (event, value, lat, lng) => {
		props.setSelectedPark(value);
		setCoordinate({lat: lat, lng: lng});
	}

	
	return (
		<div>
			<GoogleMap
				zoom={zoom}
				center={{ lat: coordinate.lat, lng: coordinate.lng }}
			>
				{markers.map((marker) => {
					return (
						<Marker position={{ lat: marker.lat, lng: marker.lng }} 
							
							onClick={(event) => handleClickMarker(event, marker.park_id, marker.lat, marker.lng)} />
					)
				})}
			</GoogleMap>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(withScriptjs(withGoogleMap(React.memo(Map))));
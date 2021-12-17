import React from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import "react-widgets/styles.css";

export const LocationSearchInput = props => {
    const handleChange = address => {
        props.input.onChange({ name: address });
    };

    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                props.input.onChange({ name: address, location: latLng });
            })
            .catch(error => console.error("Error", error));
    };

    const SuggestionsList = ({
        getInputProps,
        getSuggestionItemProps,
        suggestions,
        loading
    }) => (
        <div className="autocomplete-root">
            <input {...getInputProps({
                placeholder: props.label,
                className: 'location-search-input'
            })} />
            <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                    const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                        <div
                            {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                            })}
                        >
                            <span>{suggestion.description}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const {
        input: { value }
    } = props;

    return (
        <PlacesAutocomplete
            onChange={handleChange}
            onSelect={handleSelect}
            value={value ? value.name : ""}
        >
            {SuggestionsList}
        </PlacesAutocomplete>
    );
};
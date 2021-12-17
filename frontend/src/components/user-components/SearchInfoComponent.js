import React from "react";
import { Field, reduxForm } from "redux-form";
import { DatePicker } from "react-widgets";
import "react-widgets/styles.css";
import { MultiSelect } from "react-multi-select-component";
import { LocationSearchInput } from "./LocationSearchInput";


const renderDateTimePicker = ({ label, input: { onChange, value } }) =>
    <DatePicker
        onChange={onChange}
        value={ !value || value.getDate() < new Date().getDate() ? null : new Date(value)}
        placeholder={label}
        includeTime
    />


function SearchInfoBar(props) {
    const { handleSubmit, search_info } = props;
    const [selected, setSelected] = React.useState([]);
    const options = [
        { label: "CCTV", value: "camera" },
        { label: "Mái che", value: "roof" },
        { label: "Đặt trước", value: "booking" },
        { label: "Gửi qua đêm", value: "overnight" },
    ];

    React.useEffect( () => {
        var filter = {camera: true, roof: true, booking: true, overnight: true};
        selected.forEach(array => {
            if (array.value == 'camera') filter.camera = false;
            if (array.value == 'roof') filter.roof = false;
            if (array.value == 'booking') filter.booking = false;
            if (array.value == 'overnight') filter.overnight = false;
        })
        props.setFilter(filter);
    }, [selected])

    function convertTime(time) {
        var date = new Date(Date.parse(time));
        return (date.getHours() + ':' + date.getMinutes() + ', ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());
    }
    return (
        <form onSubmit={handleSubmit} className="searchInfoBar">
            <div className="row">
                <div className="col-2">
                    <MultiSelect
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy={"Lọc"}
                        hasSelectAll={false}
                        disableSearch={true}
                        overrideStrings={{
                            "selectSomeItems": "Lọc",
                            "allItemsAreSelected": "Tất cả"
                        }}
                    />
                </div>
                <div className="col-4">
                    <Field name="address" component={LocationSearchInput} label={search_info.address} />
                </div>
                <div className="col-4">
                    <Field
                        name="timein"
                        component={renderDateTimePicker}
                        label={convertTime(search_info.timein)}
                    />
                </div>
                <div className="col-2">
                    <button type="submit" style={{ color: "white", backgroundColor: "#2e7d32" }}>Tìm kiếm</button>
                </div>
            </div>
        </form>

    );
}

export default reduxForm({
    form: "searchinfoBar-form"
})(SearchInfoBar);
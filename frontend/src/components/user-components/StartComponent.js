import React, { Component } from "react";
import { formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { postSearchInfo } from "../../redux/UserActionCreators";
import { Field, reduxForm } from "redux-form";
import { DatePicker } from "react-widgets";
import "react-widgets/styles.css";
import { withRouter } from 'react-router-dom'

import { LocationSearchInput } from "./LocationSearchInput";

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
    <DatePicker
        onChange={onChange}
        time={showTime}
        value={ !value || value.getDate() < new Date().getDate() ? null : new Date(value)}
        defaultValue={new Date()}
        includeTime
    />


let SearchForm = props => {
    const { handleSubmit } = props;
    return (
        <div className="row-content" >
            <div className="title" style={{color:"white"}}>
                <h2>Chào mừng bạn đến với Park Type</h2>
                <p>Tìm và đặt trước bãi đỗ xe chỉ với vài thao tác đơn giản</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row row-margin">
                    <label className="col-2" style={{color:"white"}}>Vị trí</label>
                    <div className="col-6">
                        <Field name="address" component={LocationSearchInput} />
                    </div>
                </div>
                <div className="row row-margin">
                    <label className="col-2" style={{color:"white"}}>Thời gian gửi</label>
                    <div className="col-6">
                        <Field
                            name="timein"
                            showTime={false}
                            component={renderDateTimePicker}
                        />
                    </div>
                </div>
                <div className="row-margin" style={{marginLeft: "35%"}}>
                    <button type="submit" style={{color: "white", backgroundColor: "#2e7d32", width: "10vw", height: "3vw"}}>Tìm kiếm</button>
                </div>
            </form>
        </div>
    );
}

SearchForm = reduxForm({
    form: "searchinfo-form"
})(SearchForm);


const mapDispatchToProps = dispatch => ({
    postSearchInfo: (address, timein) => dispatch(postSearchInfo(address, timein))
});

class Start extends Component {

    constructor(props) {
        super(props)
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this)
    }


    async handleSubmitSearch(event) {
        event.preventDefault();
        var success = await this.props.postSearchInfo(this.props.address, this.props.timein);
        if (success) {
            localStorage.setItem('search_id', success.search_id);
            this.props.history.push('/user/parks');
        }
    }

    render() {
        return (
            <div style={{backgroundImage: "url(/logo.jpg)", backgroundSize: '100% 100%'}}>
                <SearchForm handleSubmit={this.handleSubmitSearch} />
            </div>
        );
    }
}

const searchinfo_selector = formValueSelector("searchinfo-form")

export default withRouter(connect(state => {
    const { address, timein } = searchinfo_selector(state, 'address', 'timein');
    return {
        address,
        timein
    }
}, mapDispatchToProps)(Start));
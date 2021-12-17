import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Stack, TextField } from "@mui/material";

const renderTextField = ({label, input, ...custom}) => (
    <TextField
        multiline
        rows={5}
        placeholder={label}
        sx={{width: '600px'}}
        {...input}
        {...custom}
    />
)

class RenderReportForm extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { handleSubmitReport, park_name } = this.props
        return (
            <form onSubmit={handleSubmitReport} style={{ marginLeft: "30px" }}>
                <Stack spacing={2}>
                    <h3>{park_name}</h3>
                    <div style={{ display: 'flex' }}>
                        <label>Lý do report</label>
                        <div style={{ marginLeft: "20px" }}>
                            <Field name="content" component={renderTextField} label="lý do report bãi đỗ xe này" />
                        </div>
                    </div>
                    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <button type="submit" style={{color: "white", backgroundColor: "#ed6c02"}}>Gửi report</button>
                    </div>
                </Stack>
            </form>
        );
    }
};

export default reduxForm({
    form: 'report-form',
})(RenderReportForm);


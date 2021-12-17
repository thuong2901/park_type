import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Rating, Stack, TextField } from "@mui/material";

const renderTextField = ({label, input, ...custom}) => (
    <TextField
        multiline
        rows={4}
        placeholder={label}
        sx={{width: '500px'}}
        {...input}
        {...custom}
    />
)

class RenderCommentForm extends Component {

    constructor(props) {
        super(props)
        this.renderField = this.renderField.bind(this)
    }

    renderField({ input, type }) {
        if (type === 'text') {
            return (<input {...input} type={type} />)
        } else {
            return (<div><Rating size="large" {...input} initialRate={parseInt(input.value)} /></div>)
        }
    }

    render() {
        const { handleSubmitComment, park_name } = this.props
        return (
            <form onSubmit={handleSubmitComment} style={{ marginLeft: "30px" }}>
                <Stack spacing={2}>
                    <h3>{park_name}</h3>
                    <div style={{ display: 'flex' }}>
                        <label>Đánh giá</label>
                        <div style={{ marginLeft: "20px" }}>
                            <Field name="rating" component={this.renderField} />
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <label>Bình luận</label>
                        <div style={{ marginLeft: "20px" }}>
                            <Field name="content" component={renderTextField} label="Chia sẻ trải nghiệm của bạn" />
                        </div>
                    </div>
                    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <button type="submit" style={{color: "white", backgroundColor: "#2e7d32"}}>Đăng đánh giá</button>
                    </div>
                </Stack>
            </form>
        );
    }
};

export default reduxForm({
    form: 'comment-form',
})(RenderCommentForm);


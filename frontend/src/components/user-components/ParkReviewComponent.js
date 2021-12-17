import {
    Button, Rating, Paper, Stack, Avatar, ListItem,
    List, ListItemAvatar, ListItemText, Divider
} from "@mui/material";
import { Modal, ModalHeader, ModalBody, ListInlineItem } from "reactstrap";
import React, { Component } from "react";
import RenderCommentForm from './ReviewFormComponent';
import RenderReportForm from './ReportFormComponent';
import { formValueSelector } from "redux-form";
import { connect } from "react-redux";

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    async handleSubmitComment(event) {
        this.toggleModal();
        event.preventDefault();
        await this.props.postComment(this.props.park_id, this.props.rating, this.props.content);
        this.props.setIsPostComment(true);
    }

    render() {
        const { park_name } = this.props
        return (
            <>
                <div className="ml-auto" navbar>
                    <Button outline onClick={this.toggleModal} variant="contained" color="success">
                        <span className="fa fa-pencil fa-lg"></span> Đánh giá
                    </Button>
                </div>
                <Modal centered size="lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm đánh giá mới</ModalHeader>
                    <ModalBody>
                        <RenderCommentForm handleSubmitComment={this.handleSubmitComment} park_name={park_name} />
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

const comment_selector = formValueSelector("comment-form")

CommentForm = connect(state => {
    const { rating, content } = comment_selector(state, 'rating', 'content');
    return {
        rating,
        content
    }
})(CommentForm);

class ReportForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmitReport = this.handleSubmitReport.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmitReport(event) {
        this.toggleModal();
        event.preventDefault();
        this.props.postReport(this.props.park_id, this.props.content);
    }

    render() {
        const { park_name } = this.props
        return (
            <>
                <div className="ml-auto" navbar>
                    <Button outline onClick={this.toggleModal} variant="contained" color="warning">
                        <span className="fas fa-exclamation-triangle"></span> Report
                    </Button>
                </div>
                <Modal centered size="lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm report mới</ModalHeader>
                    <ModalBody>
                        <RenderReportForm handleSubmitReport={this.handleSubmitReport} park_name={park_name} />
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

const report_selector = formValueSelector("report-form")

ReportForm = connect(state => {
    const content = report_selector(state, 'content');
    return {
        content
    }
})(ReportForm);

function RenderParkReview({ comments, park_id, park_name, postComment, postReport, setIsPostComment }) {
    if (comments != null) {
        return (
            <div>
                <Paper style={{ maxHeight: 320, overflow: 'auto', backgroundColor: "#E5E5E5" }}>
                    <List sx={{ width: '100%' }}>
                        {comments.map((comment) => {
                            return (
                                <div>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar>{comment.author[0]}</Avatar>
                                        </ListItemAvatar>
                                        <ListInlineItem>
                                            <ListItemText primary={comment.author}
                                                secondary={
                                                    <React.Fragment>
                                                        <Rating size="small" name="rating" value={comment.rating} precision={0.1} readOnly />
                                                        <div>{comment.content}</div>
                                                    </React.Fragment>
                                                }
                                            />
                                        </ListInlineItem>
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </div>
                            );
                        })}
                    </List>
                </Paper>
                <Stack spacing={3} direction="row" justifyContent="center" style={{marginTop: "10px"}} >
                    <CommentForm park_id={park_id} park_name={park_name} postComment={postComment} setIsPostComment={setIsPostComment} />
                    <ReportForm park_id={park_id} park_name={park_name} postReport={postReport} />
                </Stack>
            </div>
        );
    }
}

const ParkReview = (props) => {
    if (props.errMess) {
        return (
            <div>
                <h4>{props.errMess}</h4>
            </div>
        );
    }
    else if (props.comments != null) {
        return (
            <RenderParkReview comments={props.comments}
                park_id={props.park_id}
                park_name={props.park_name}
                postComment={props.postComment}
                postReport={props.postReport}
                setIsPostComment={props.setIsPostComment} />
        );
    }
}

export default ParkReview;
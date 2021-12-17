import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { postLogin } from "../../redux/AuthenActionCreators";
import { connect } from "react-redux";
import { fetchInfoUser} from "../../redux/AccountActionCreators";
import { withRouter } from 'react-router-dom'

const required = (val) => val && val.length;

const mapDispatchToProps = dispatch => ({
    postLogin: (username, password) => dispatch(postLogin(username, password)),
    fetchInfoUser: () => dispatch(fetchInfoUser())
});

class Login extends Component {
    constructor(props) {
        super(props);
    }

    async handleSubmit(values) {
        var result = await this.props.postLogin(values.username, values.password);
        if (result) {
            if (result.role != 'admin') await this.props.fetchInfoUser();
            if (result.role == 'user') this.props.history.push('/');
            if (result.role == 'admin') this.props.history.push('/admin/dashboard');
            if (result.role == 'owner') this.props.history.push('/owner/myparks');
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content" style={{boxShadow: "0 3px 10px 0 rgb(0 0 0 / 20%)", width: "60vw", paddingLeft: "0px", marginTop: "30px ", marginBottom: "30px"}}>
                    <div className="col-12 col-md-8 offset-2" style={{marginBottom: "20px"}}>
                      <h3 style={{fontWeight: 'bold', color: 'green'}}>Đăng nhập tài khoản</h3>
                      <p>Chào mừng đến với ParkType! Đăng nhập vào tài khoản của bạn!</p>
                    </div>
                    <div className="col-12 col-md-8 offset-2">
                        <LocalForm model="login" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                            <Label htmlFor="username" md={6}>Tên người dùng</Label>
                                <Col md={12}>
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="Username"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".username"
                                        show="touched"
                                        messages={{
                                            required: 'Bắt buộc'
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="password" md={3}>Mật khẩu</Label>
                                <Col md={12}>
                                    <Control model=".password" id="password" name="password"
                                        type="password"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        messages={{
                                            required: 'Bắt buộc'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Link to="/forgotten" style={{textDecoration: "none", color: "green", fontWeight: "bold"}}>
                                <p className='col-12 col-md-3 offset-9' >Quên mật khẩu?</p>
                            </Link>
                            <Button type="submit" value="submit" color="success" className='col-12 col-md-8 offset-2' style={{height: "50px", fontWeight: "bold", fontSize: "large"}}>Đăng nhập</Button>
                            <p style={{marginTop: "20px", textAlign: "center"}}>Bạn chưa có tài khoản?</p>
                            <Link to="/register">
                            <Button className='col-12 col-md-8 offset-2' style={{height: "50px", fontWeight: "bold", fontSize: "large"}}>Tạo tài khoản</Button>
                            </Link>
                        </LocalForm>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Login));
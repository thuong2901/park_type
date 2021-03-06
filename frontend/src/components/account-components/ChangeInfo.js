import React, { Component } from 'react';
import { Button, FormGroup, Input, Label, Form, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Layout from './LayOut';
import { fetchInfoUser, postChange, postDelete, postChangePass, postVerify } from "../../redux/AccountActionCreators";
import { connect } from "react-redux";
import AlertDialog from "../Dialog_Component";
import { Logout } from "../../redux/AuthenActionCreators";
import { useHistory } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validUsername = (val) => /^[a-zA-Z][a-zA-Z0-9]+$/.test(val);
//const validPasword = (val) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$/.test(val);
const validPasword = (val) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{0,}$/.test(val);
const passwordsMatch = ({ newpass, repass }) => {
    return newpass === repass;
};
// const mapDispatchToProps = dispatch => ({
//     postUser: (username, password, email, firstname, lastname,address, type) => dispatch(postUser(username, password, email, firstname, lastname,address, type))
// });

const mapStateToProps = state => {
    return {
        info_user: state.info_user,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchInfoUser: () => dispatch(fetchInfoUser()),
    postChange: (username, firstname, lastname, email, phone, address) => dispatch(postChange(username, firstname, lastname, email, phone, address)),
    postChangePass: (password, newpass, repass) => dispatch(postChangePass(password, newpass, repass)),
    postDelete: (username, email) => dispatch(postDelete(username, email)),
    postVerify: () => dispatch(postVerify()),
    Logout: () => dispatch(Logout())

});

function ChangeInfo(props) {

    const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);
    const history = useHistory();
    React.useEffect(() => {
        props.fetchInfoUser();
    }, []);

    React.useEffect(() => {
        forceUpdate();
    }, [props.info_user])

    const [openModal, setOpenModal] = React.useState(false)
    const [changePass, setChangePass] = React.useState(false)



    const handleChangePass = e => {
        e.preventDefault()
        setChangePass(true)

    }

    const closeChangePass = () => {
        setChangePass(false)
    }

    const onClickDelete = e => {
        e.preventDefault()
        setOpenModal(true)
    }

    const onCloseModal = () => {
        setOpenModal(false)
    }

    const handleSubmit = async (values) => {
        console.log(values);
        console.log('---------')
        var response = await props.postChange(values.username, values.firstname, values.lastname, values.email, values.phone, values.address)
        if (response) {
            props.fetchInfoUser();
        }
    }
    const clickChangePass = (values) => {
        console.log(values);
        props.postChangePass(values.password, values.newpass, values.repass);
        closeChangePass();
    }

    const handleVerify = () => {
        props.postVerify();
    }
    const handleDeleteUser = async () => {
        var response = await props.postDelete();
        if (response) {
            props.Logout();
            history.push('/');
        }
    }

    return (
        <Row>
            <Col className="col-3">
                <Layout></Layout>
            </Col>
            <Col className="col-9">
                <div className="container" style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="row row-content" style={{ backgroundColor: '#F8F9FB', borderRadius: '20px' }}>
                        <div className="col-10 ">
                            <h3 style={{ color: "green", fontWeight: "bold" }}>Th??ng tin t??i kho???n</h3>
                            <p>B???n c?? th??? ch???nh s???a th??ng tin h??? s?? c???a m??nh b??n d?????i.</p>
                        </div>
                        <div className="col-10 ">
                            <LocalForm model="changeinfo" onSubmit={handleSubmit}>
                                <Row className="form-group">
                                    <Label htmlFor="username" md={3}>T??n ng?????i d??ng</Label>
                                    <Col >
                                        <Control.text model=".username" id="username" name="username"
                                            placeholder="T??n ng?????i d??ng"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(5), maxLength: maxLength(30), validUsername
                                            }}
                                            disabled={true} defaultValue={props.info_user.info.username}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".username"
                                            show="touched"
                                            messages={{
                                                required: 'B???t bu???c',
                                                minLength: 'T???i thi???u 5 k?? t???',
                                                maxLength: 'T???i ??a 30 k?? t???',
                                                validUsername: 'T??i kho???n ch??? ch???a ch??? c??i v?? s???, ???????c b???t ?????u b???ng ch??? c??i'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="form-group">
                                    <Label htmlFor="firstname" md={3}>H???</Label>
                                    <Col >
                                        <Control.text model=".firstname" id="firstname" name="firstname"
                                            placeholder="H???"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(1), maxLength: maxLength(30)
                                            }}
                                            defaultValue={props.info_user.info.firstname}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".firstname"
                                            show="touched"
                                            messages={{
                                                required: 'B???t bu???c',
                                                minLength: 'T???i thi???u 1 k?? t???',
                                                maxLength: 'T???i ??a 30 k?? t???',
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="form-group">
                                    <Label htmlFor="lastname" md={3}>T??n</Label>
                                    <Col >
                                        <Control.text model=".lastname" id="lastname" name="lastname"
                                            placeholder="T??n"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(1), maxLength: maxLength(30)
                                            }}
                                            defaultValue={props.info_user.info.lastname}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".lastname"
                                            show="touched"
                                            messages={{
                                                required: 'B???t bu???c',
                                                minLength: 'T???i thi???u 1 k?? t???',
                                                maxLength: 'T???i ??a 30 k?? t???',
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="form-group">
                                    <Label htmlFor="phone" md={3}>S??T</Label>
                                    <Col >
                                        <Control.text model=".phone" id="phone" name="phone"
                                            placeholder="S??T"
                                            className="form-control"

                                            defaultValue={props.info_user.info.phone}
                                        />

                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={3}>Email</Label>
                                    <Col >
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required, validEmail
                                            }}
                                            defaultValue={props.info_user.info.email}
                                            disabled={props.info_user.info.isActivated} />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                validEmail: '?????a ch??? email kh??ng ????ng'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="form-group">
                                    <Label htmlFor="address" md={3}>?????a ch???</Label>
                                    <Col >
                                        <Control.text model=".address" id="address" name="address"
                                            placeholder="?????a ch???"
                                            className="form-control"

                                            defaultValue={props.info_user.info.address}
                                        />

                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="form-group">
                                    <Label htmlFor="type" md={3}>Ch???n lo???i t??i kho???n</Label>
                                    <Col md={3}>
                                        <Control.select model=".type" name="type"
                                            className="form-control" defaultValue="user"
                                            validators={{
                                                required
                                            }}
                                            defaultValue={props.info_user.info.type}
                                            disabled={true}
                                        >
                                            <option value="user">Ng?????i d??ng</option>
                                            <option value="owner">Ch??? b??i ?????</option>
                                        </Control.select>
                                    </Col>

                                </Row>
                                <br></br>

                                <Row className="form-group">
                                    <Label htmlFor="password" md={3}>M???t kh???u</Label>
                                    <Col >
                                        {/* <Control model=".password" id="password" name="password"
                                        type="password"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(8), maxLength: maxLength(50), validPasword
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        messages={{
                                            required: 'B???t bu???c',
                                            minLength: 'T???i thi???u 8 k?? t???',
                                            maxLength: 'T???i ??a 50 k?? t???',
                                            validPasword: 'M???t kh???u ch???a ??t nh???t 1 ch??? vi???t hoa, 1 ch??? vi???t th?????ng v?? 1 ch??? s???'
                                        }}
                                     /> */}
                                        <Button style={{ backgroundColor: 'white', color: 'green', border: '1px solid green' }} onClick={handleChangePass}  >
                                            ?????t l???i m???t kh???u
                                        </Button>
                                        <Modal style={{ display: 'block', marginLeft: '500px', border: "15px solid green" }} open={changePass} onClose={closeChangePass} >
                                            <h5 style={{ color: "green", fontWeight: "bold", marginLeft: "30%" }}>?????t l???i m???t kh???u</h5>
                                            <LocalForm model="changepass" onSubmit={clickChangePass} validators={{ '': { passwordsMatch } }}>
                                                <Row className="form-group" style={{ marginTop: "10px" }}>
                                                    <Col md={5}>
                                                        <Label htmlFor="password">M???t kh???u hi???n t???i</Label>
                                                    </Col>
                                                    <Col>
                                                        <Control model=".password" id="password" name="password"
                                                            type="password"
                                                            className="form-control"

                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="form-group" style={{ marginTop: "10px" }}>
                                                    <Col md={5}>
                                                        <Label htmlFor="newpass" >M???t kh???u m???i</Label>
                                                    </Col>
                                                    <Col>
                                                        <Control model=".newpass" id="newpass" name="newpass"
                                                            type="password"
                                                            className="form-control"
                                                            validators={{
                                                                required, minLength: minLength(8), maxLength: maxLength(50), validPasword
                                                            }}
                                                        />
                                                        <Errors style={{ fontSize: '10px' }}
                                                            className="text-danger"
                                                            model=".newpass"
                                                            show="touched"
                                                            wrapper="ul"
                                                            component="li"
                                                            messages={{
                                                                required: 'B???t bu???c ',
                                                                minLength: 'T???i thi???u 8 k?? t??? ',
                                                                maxLength: 'T???i ??a 50 k?? t??? ',
                                                                validPasword: 'M???t kh???u ch???a ??t nh???t 1 ch??? vi???t hoa, 1 ch??? vi???t th?????ng v?? 1 ch??? s??? '
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="form-group" style={{ marginTop: "10px" }}>
                                                    <Col md={5}>
                                                        <Label htmlFor="password">Nh???p l???i m???t kh???u</Label>
                                                    </Col>
                                                    <Col>
                                                        <Control model=".repass" id="repass" name="repass"
                                                            type="password"
                                                            className="form-control"
                                                            validators={{
                                                                required,

                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model="changepass"
                                                            show="touched"
                                                            messages={{
                                                                required: 'B???t bu???c',
                                                                passwordsMatch: 'M???t kh???u ch??a kh???p'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Button color="success" style={{ marginLeft: "50%" }} type="submit"> X??c nh???n </Button>
                                            </LocalForm>
                                        </Modal>
                                    </Col>
                                </Row>

                                {props.info_user.info.isActivated == 1 ?
                                    (<div>
                                        <br></br>
                                        <Row className="form-group" style={{ backgroundColor: "#CEE5D0", borderRadius: "5px" }}>
                                            <Label style={{ marginRight: "5%" }}><img src="https://img.icons8.com/color/48/000000/checked-2--v1.png" />T??i kho???n ???? ???????c x??c minh!</Label>
                                        </Row>
                                    </div>
                                    ) :
                                    (
                                        <Row className="form-group">
                                            <Label htmlFor="verification" md={3}>X??c minh t??i kho???n</Label>
                                            <Col >
                                                <Button style={{ backgroundColor: 'white', color: 'green', border: '1px solid green' }} onClick={handleVerify}  >
                                                    X??c minh t??i kho???n
                                                </Button>
                                            </Col>
                                        </Row>
                                    )}

                                <Row className="form-group">
                                    <Col >
                                        <Button style={{ display: 'block', margin: 'auto', width: '100%', border: '5px solid', borderRadius: '15px' }} type="submit" color="success" >
                                            L??u thay ?????i
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        
                        <div>
                            <AlertDialog
                                title={"X??a t??i kho???n"}
                                content={"B???n ch???c ch???n mu???n x??a t??i kho???n n??y?"}
                                label={"X??a t??i kho???n"}
                                handleAction={handleDeleteUser} />
                        </div>
                    </div>
                    <br></br>
                </div>
            </Col>
        </Row>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeInfo);
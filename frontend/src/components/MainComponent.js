import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import MainAdmin from "./admin-components/MainAdminComponent";
import MainUser from "./user-components/MainUserComponent";
import MainAccountComponent from "./account-components/MainAccountComponent";
import Forgotten from "./authen-components/ForgotPasswordComponent";
import Login from "./authen-components/LoginComponent";
import Register from "./authen-components/SignupComponent";
import Verify from "./authen-components/VerifyComponent";
import CustomizedSnackbars from "./SnackBar";
import MainOwner from "./owner-components/MainOwnerComponent";

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CustomizedSnackbars />
                <Header />
                <Switch>
                    <Route path="/admin"><MainAdmin /></Route>
                    <Route path="/user"><MainUser /></Route>
                    <Route path="/account"><MainAccountComponent /></Route>
                    <Route path="/login"><Login /></Route>
                    <Route path="/register"><Register /></Route>
                    <Route path="/forgotten"><Forgotten /></Route>
                    <Route path="/verify"><Verify /></Route>
                    <Route path="/owner"><MainOwner /></Route>
                    <Redirect to="/user/start" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);
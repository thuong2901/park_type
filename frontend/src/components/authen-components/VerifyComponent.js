import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getVerify } from "../../redux/AuthenActionCreators";

const mapDispatchToProps = dispatch => ({
    getVerify: (code) => dispatch(getVerify(code))
})

const Verify = (props) => {
    const search = useLocation().search;
    const code = new URLSearchParams(search).get('code');
    const history = useHistory();
    useEffect(() => {
        async function verify() {
            var result = await props.getVerify(code);
            if (result) {
                history.push('/');
            }
        }
        verify();
    }, [])


    return (
        <div>
            abc
        </div>
    )

}

export default connect(null, mapDispatchToProps)(Verify);
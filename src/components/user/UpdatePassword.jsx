import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
// import userService from '../service/userService';
import { IconButton, Snackbar } from '@material-ui/core';
// import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { withRouter } from "react-router-dom";

export default class UpdatePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {

            newPassword: '',
            confirmPassword: '',
            Error: false,
            message: ""
        }
    }

    snackBarClose = () => {
        this.setState({ Error: false });
    }
    onChangeNewPassword = (event) => {

        var newPassword = event.target.value;
        this.setState({
            newPassword: newPassword
        })

    }
    onChangeConfirmPassword = (event) => {

        var confirmPassword = event.target.value;
        this.setState({
            confirmPassword: confirmPassword
        })

    }


    onSubmit = () => {

        let token = this.props.match.params.token;
        // console.log(token);
        if (this.state.newPassword === "" && this.state.confirmPassword === "") {
            this.setState({
                Error: true,
                message: "Password Field cannot be empty"
            })
        }

        else if (this.state.newPassword !== this.state.confirmPassword) {
            this.setState({
                Error: true,
                message: "Passwords not matches"
            })
        }



        else if (this.state.newPassword.length < 4 && this.state.confirmPassword.length < 4) {
            this.setState({
                Error: true,
                message: "Password should be min 4"
            })
        }



        else {
            var passwordDetails = {
                "newPassword": this.state.newPassword,
                "confirmPassword": this.state.confirmPassword
            }
            console.log(passwordDetails);
            // controller.updatePassword(passwordDetails, token).then((res) => {
            //     console.log(res.data);
            //     this.props.history.push("/login")
            // }).catch((err) => {
            //     console.log("in eror");
            //     console.log("error", err.response)
            //     // var msg = err.response.data.message

            //     this.setState({ message: 'something went wrong' })

            // });
        }
    }

    render() {
        return (
            <div className="registerForm">
                <Card className="logincard">
                    <Snackbar
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        open={this.state.Error}
                        autoHideDuration={6000}
                        onClose={this.snackBarClose}
                        message={<span id="message-id">{this.state.message}</span>}
                        action={
                            <IconButton
                                onClick={this.snackBarClose}>
                                {/* <CloseOutlinedIcon /> */}
                            </IconButton>
                        } />


                    <div className="heading">
                        <div className='register-book-store'>
                            <h1 className='register-h1'>
                                <span style={{ color: "#2196f3" }}>B</span>
                                <span style={{ color: "#b71c1c" }}>o</span>
                                <span style={{ color: "#ffc107" }}>o</span>
                                <span style={{ color: "#1976d2" }}>k</span>
                                <span style={{ color: "#43a047" }}>S</span>
                                <span style={{ color: "#b71c1c" }}>t</span>
                                <span style={{ color: "#1976d2" }}>o</span>
                                <span style={{ color: "#ffc107" }}>r</span>
                                <span style={{ color: "#b71c1c" }}>e</span>

                                </h1>

                        </div>
                        <div className='register-h2'><h2>Update your Password</h2></div>
                    </div>

                    <div className='register-names'>

                        <div>
                            <TextField
                                id="outlined-password-input"
                                label="New Password"

                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                value={this.state.password}
                                onChange={this.onChangeNewPassword}
                            />
                        </div>
                        <TextField
                            id="outlined-password-input"
                            label="Confirm Password"

                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            value={this.state.password}
                            onChange={this.onChangeConfirmPassword}
                        />
                        <div>
                            <Button variant="contained" color="primary" className="loginSubmit"
                                onClick={this.onSubmit}   >
                                Submit
                        </Button>

                        </div>

                    </div>

                </Card>
            </div>

        )
    }
}
//export default UpdatePassword;
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import { withRouter } from "react-router-dom";

export default class ForgotPassword extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: false,
            message: ''
        }
    }

    onChangeEmail = (event) => {
        var email = event.target.value;
        this.setState({
            email: email
        })
    }

    onSubmit = () => {
        var email = {
            "email": this.state.email,
        }

        console.log(email);
            }

    render(){
        return(
            <div className="registrationForm">
                <Card className="logincard">
                    <div className="forgot-heading">
                        <div className='register-user'>
                            <h1 className='register-h1'>
                                <span style={{ color: "#0000FF" }}>F</span>
                                <span style={{ color: "#7FFF00" }}>o</span>
                                <span style={{ color: "#0000FF" }}>r</span>
                                <span style={{ color: "#7FFF00" }}>g</span>
                                <span style={{ color: "#0000FF" }}>o</span>
                                <span style={{ color: "#7FFF00" }}>t</span>
                                <span style={{ color: "#0000FF" }}>-</span>
                                <span style={{ color: "#7FFF00" }}>P</span>
                                <span style={{ color: "#0000FF" }}>a</span>
                                <span style={{ color: "#7FFF00" }}>s</span>
                                <span style={{ color: "#0000FF" }}>s</span>
                                <span style={{ color: "#7FFF00" }}>w</span>
                                <span style={{ color: "#0000FF" }}>o</span>
                                <span style={{ color: "#7FFF00" }}>r</span>
                                <span style={{ color: "#0000FF" }}>d</span></h1>
                        </div>
                        <div className='register-h2'><h2>Enter your registered email id</h2></div>
                        </div>
                        <div className='register-names'>
                            <div>
                                <TextField
                                    id="outlined-email-input"
                                    label="Email"
                                    name="email"

                                    margin="normal"
                                    variant="outlined"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                />
                            </div>
                            <div>
                                <Button variant="contained" color="primary"
                                onClick ={this.onSubmit} >
                                    Submit
                                </Button>
                            </div>
                            <div className="errorMessage">
                                <span style={{ color: "#8B0000"}}>{this.state.message}</span>
                            </div>
                        </div>
                </Card>
            </div>    
        )
    }

}

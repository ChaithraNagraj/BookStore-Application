import React from 'react';
import { Card, TextField, Snackbar, IconButton, Button } from '@material-ui/core'
import { withRouter } from "react-router-dom";
import "./resetpass.css";
import { resetPassword } from "../../services/ResetPassServices"; 

export default class Resetpassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmpassword: '',
            password:'',
            snackBarMsg: '',
            openSnackBar: false,
        }
        // this.handleemail=this.handleemail.bind(this)
    }

    handleconfirmPassword = (event) => {
        this.setState({
            confirmpassword: event.target.value,
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value            
        })
    }


    handleSubmit = () => {

        if (this.state.confirmpassword === '') {
            this.setState({
                openSnackBar: true,
                snackBarMsg: "Password cannot be empty"
            })
        }
        else if(this.state.password !== this.state.password){
            this.setState({
                openSnackBar: true,
                snackBarMsg: "Password did not match"
            })
        }

        else {
            let data = {
                "password": this.state.password
            }
            console.log("Reset Password Component data", data)
            resetPassword(data).then(res => {
                console.log("Response after hitting reset password api >> ", data);
                this.props.history.push('/')

            }).catch(error => {
                console.log("Error after hitting reset password api  ", error);
            })
        }
    }
    handleClose = () => {
        this.setState({
            openSnackBar: false
        })
    }
    render() {
        return (
            <div className="resetPassword-container">
                <Card className="resetPassword-card">
                    <div>
                        <h1 style={{ color: "black",backgroundColor:"#A03037", fontsize:"10px",marginTop:"-2px"}}>
                                 Reset Password
                    </h1>
                    <div className="resetPassword1" style={{marginLeft:'100px' }}>
                        <TextField
                        type="confirmpassword"
                            id="confirmpassword"
                            placeholder="New Password"
                            variant="outlined"
                            value={this.state.password}
                            onChange={this.handleconfirmPassword}
                        /></div>
                        
                    <div className="resetPassword" style={{marginLeft:'100px' }}>
                        <TextField
                        type="password"
                            id="password"
                            placeholder="Confirm Password"
                            variant="outlined"
                            value={this.state.password2}
                            onChange={this.handlePassword}
                        /></div>
                        <div className="resetButton">
                        <Button variant="contained" color="primary" style={{marginLeft:'300px' ,marginTop:'20px'}} onClick={this.handleSubmit}>Submit</Button>
                    </div></div>
                </Card>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.openSnackBar}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    message={<span id="message-id">{this.state.snackBarMsg}</span>}
                    action={[
                        <IconButton
                            onClick={this.handleClose}
                        >
                        </IconButton>
                    ]}
                />
            </div>
        )
    }
}
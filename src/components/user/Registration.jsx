import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Card, Snackbar, IconButton } from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { userRegister } from '../../services/UserService.jsx';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import "./Registration.css";



class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          userName:"",
          email: "",
          password: "",
          mobileNumber: "",
          role:"",
          error: false,
          message: ""
        };
      }
    
      snackBarClose = () => {
        this.setState({ Error: false });
      };
      onChangeName = event => {
        var name = event.target.value;
        this.setState({
          name: name
        });
        // console.log("aaaaaaa",this.state.name)
      };
      onChangeUserName = event => {
        var userName = event.target.value;
        this.setState({
          userName: userName
        });
        // console.log("aaaaaaa",this.state.name)
      };

      onChangeEmail = event => {
        var email = event.target.value;
        this.setState({
          email: email
        });
      };
      onChangeMobno = event => {
        this.setState({
          mobileNumber: event.target.value
        });
      };
      onChangeRole = event => {
          this.setState({
         role: event.target.value

          });
      };
      onChangePassword = event => {
        var password = event.target.value;
        this.setState({
          password: password
        });
      };
      handleChangeRadio = (event) => {
        console.log("radiobutton****")
        
        this.setState({     
            role: event.target.value
        })
    }
    
      onSubmit = () => {
        if (this.state.name === "") {
          this.setState({
            Error: true,
            message: "name cannot be empty"
          });
        }
    
        if (this.state.email === "") {
          this.setState({
            Error: true,
            message: "Email cannot be empty"
          });
        } else if (
          !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)
        ) {
          this.setState({
            Error: true,
            message: "Please provide a valid email address"
          });
        } else if (!/^[6789]\d{9}$/.test(this.state.mobileNumber)) {
          this.setState({
            Error: true,
            message: "Please provide a valid mobile no"
          });
        } else if (this.state.password === null || this.state.password.length < 4) {
          this.setState({
            Error: true,
            message: "Password should be min 4"
          });
        } else {
          var registartionDetails = {
            name: this.state.name,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            mobileNumber: this.state.mobileNumber,
            role: this.state.role
          };
          console.log(registartionDetails)
    
          // userRegister.then(response => {
          //     console.log(response.data);
    
          // })
          userRegister(registartionDetails).then(res => {
            console.log("resp-----", res.data);
    
            this.props.history.push("../../Login");
          });
        }
      };
    
      render() {
        return (
          // <div className="registerForm">
            <Card className="formcard">
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                open={this.state.Error}
                autoHideDuration={2000}
                onClose={this.snackBarClose}
                message={<span id="message-id">{this.state.message}</span>}
                action={
                  <IconButton onClick={this.snackBarClose}>
                    <CloseOutlinedIcon />
                  </IconButton>
                }
              />
              <div className="heading" >
              <div className="register-h2"  style={{backgroundColor:'#A03037',color: 'black'}}>
                  <h2 >Sign up for BookStore</h2>
                </div>
              </div>
              <div>
                <div className="register-names">
                  <TextField
                    id="outlined-name-input"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    value={this.state.name}
                    onChange={this.onChangeName}
                  />
                  <TextField
                    id="outlined-name-input"
                    label="UserName"
                    name="userName"
                    autoComplete="userName"
                    margin="normal"
                    variant="outlined"
                    value={this.state.userName}
                    onChange={this.onChangeUserName}
                  />

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
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                  />
                  <div>
                    <TextField
                      id="outlined-mobno-input"
                      label="Mobile Number"
                      type="text"
                      margin="normal"
                      variant="outlined"
                      value={this.state.mobileNumber}
                      onChange={this.onChangeMobno}
                    />
                  </div>
                 
                  <div style={{ width: '52%', marginLeft: '190px',height:'220', paddingBottom: '-40px' }}>
                        {/* <div className="regFName"> 
                            {/* <div style={{ width: '92%', marginLeft: '390px', paddingBottom: '20px' }} >
                                <div style={{ width: '92%', marginLeft: '-300px', paddingBottom: '20px' }} className="typeRadio">Type of Registration</div> */}
                                <RadioGroup style ={{allign:"centre",height:'220'}} aria-label="Type"  name="type" row >
                                    <FormControlLabel value="3"
                                     control={<Radio />} 
                                     onChange={this.handleChangeRadio}
                                    // checked={!this.state.role === "user"}
                                     label="User" />

                                    <FormControlLabel value="2" 
                                    control={<Radio />} 
                                    onChange={this.handleChangeRadio}
                                    // checked={!this.state.role === "user"}
                                    label="Seller" />
                                    <FormControlLabel value="1" 
                                    control={<Radio />} 
                                    onChange={this.handleChangeRadio}
                                    // checked={!this.state.role === "user"}
                                    label="Admin" />

                                    
                                </RadioGroup>
                  </div>

                  <div  style={{marginTop:'5px',font:'',color:'Red'}}>
                      <Button  style={{backgroundColor:'#A03037',color: 'black'}}
                      variant="contained"
                      // color="red"
                      onClick={this.onSubmit}
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          // </div>
        );
      }
    }
    export default withRouter(Registration);
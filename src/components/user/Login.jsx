import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Card, Link } from '@material-ui/core';
import "./login.css";
import { Button, Popover } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import VisibilityOffTwoToneIcon from '@material-ui/icons/VisibilityOffTwoTone';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { LoginRequestMethod} from '../../services/LoginServices';
import ReactModalLogin from "react-modal-login";
 
import { facebookConfig, googleConfig } from "./social-config";

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loginId: "",
      password: "",
      role: "",
      loginAuthentication: false,
      showError: false,
      showModal: false,
      loading: false,
      error: null

      
    }
  }


  loginIdHandler = (event) => {
    const loginId = event.target.value;
    console.log("loginId", loginId);
    this.setState({
      loginId: loginId,
    })
  }
  passwordHandler = (event) => {
    const password = event.target.value;
    console.log('password', password)
    this.setState({
      password: password,
    })
  }
  roleHandler = (event) => {
    const role = event.target.value;
    console.log('role', role)
    this.setState({
      role: role
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    var data = {
      loginId: this.state.loginId,
      password: this.state.password,
      role: this.state.role
    }
    const response = LoginRequestMethod(data);
    response.then(res => {
      console.log(res.data);
      
      console.log(res.data.token);
      // console.log(res.data.token);
      console.log(res.data.data.email);
      
      localStorage.setItem('token', res.data.token);
    localStorage.setItem('loginId', res.data.data.email);
    
      if (res.data === data.LoginId) {
        console("trying to print token")
        console(res.token)

        this.setState({
          loginAuthentication: true
        })
      }
      this.props.history.push('../../bookstoreApplication');
    }).catch(() => {
      this.setState({
        showError: true
      })
    })
  }
  
  openModal() {
    this.setState({
      showModal: true
    });
  }
 
  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }
 
  onLoginSuccess(method, response) {
    console.log("logged successfully with " + method);
    localStorage.setItem('loginId',method);

  }
 
  onLoginFail(method, response) {
    console.log("logging failed with " + method);
    this.setState({
      error: response
    });
  }
 
  startLoading() {
    this.setState({
      loading: true
    });
  }
 
  finishLoading() {
    this.setState({
      loading: false
    });
  }
 
  afterTabsChange() {
    this.setState({
      error: null
    });
  }
  render() {

    return (
      <>
              <Card className="logincard">

                <form className=" container p-5 bg-light text-primary mx-auto" id='form' onSubmit={this.submitHandler} >
                <div className="form-group" style={{width:'100%'}}>
            <h1 className='display-3 text-dark' style={{backgroundColor:'#A03037',width:'100%'}}> Login Here</h1>
          </div>

          <TextField
           id="outlined-name-input"
           label="loginId"
           name="loginId"
           autoComplete="loginId"
           margin="normal"
           variant="outlined"
           onChange={this.loginIdHandler}
                  InputProps={{
                        endAdornment: (
                        <InputAdornment position="end" color="secondary" sytle={{width: '10px'}}>
                           <PermIdentityIcon /> 
                        </InputAdornment>
                        ),
                       }}
         />
         <TextField
           id="outlined-name-input"
           label="password"
           name="password"
           type="password"

           autoComplete="password"
           margin="normal"
           variant="outlined"
           onChange={this.passwordHandler}
          //  value={this.state.password}
                  InputProps={{
                        endAdornment: (
                        <InputAdornment position="end" color="secondary" sytle={{width: '10px'}}>
                           <VisibilityOffTwoToneIcon /> 
                        </InputAdornment>
                        ),
                       }}
         />


          
          <div className="form-group " style={{ marginTop: '15px',fontWeight:'bold', marginnRight:'100px'}}>
          <RadioGroup style ={{allign:"centre",height:'220'}} aria-label="Type"  name="type" row >
                           <FormControlLabel value="3"
                            control={<Radio />} 
                            onChange={this.roleHandler}

                            label="User" />

                           <FormControlLabel value="2" 
                           control={<Radio />} 
                           onChange={this.roleHandler}

                           label="Seller" />
                           
                       </RadioGroup>
           
          </div>

          {
            this.state.showError ? <div className="form-group text-danger" id="error">Email or Password is incorrect </div> : null
          }
          <Button type="submit" className="btn btn-success" id="submitBtn"  style={{ background:' #A03037',fontWeight:'bold',color:'Balck',marginTop:'20px',height:'30px',width:'100px'}}>Login</Button> 
                         <small className="link" ><Link href="../Registration" >

                                Register-Here?

                        </Link></small>

                                     <div>
        <button onClick={() => this.openModal()} style={{background:'A03037'}}>SocialLogin</button>
 
        <ReactModalLogin
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          providers={{
            facebook: {
              config: facebookConfig,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              label: "Continue with Facebook"
            },
            google: {
              config: googleConfig,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              label: "Continue with Google"
            }
          }}
        />
      </div>


        </form>
        </Card>

      </>
    )
  }
}
export default Login;
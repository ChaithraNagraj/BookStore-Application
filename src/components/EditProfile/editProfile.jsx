import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Card, Link } from '@material-ui/core';
import { ProfileRequestMethod} from '../../services/ProfileServices';
import Button from '@material-ui/core/Button';

class editProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: "",
      password: "",
      mobileNumber: "",
      userName:"",
      loginAuthentication: false,
      showError: false
    }
  }

  fullNameHandler = (event) => {
    const fullName = event.target.value;
    console.log("loginId", fullName);
    this.setState({
      fullName: fullName,
    })
  }
  passwordHandler = (event) => {
    const password = event.target.value;
    console.log('password', password)
    this.setState({
      password: password,
    })
  }
  mobileNumberHandler = (event) => {
    const mobileNumber = event.target.value;
    console.log('mobileNumber', mobileNumber)
    this.setState({
      mobileNumber: mobileNumber,
    })
  }
  userNameHandler = (event) => {
    const userName = event.target.value;
    console.log('userName', userName)
    this.setState({
      userName: userName,
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    var data = {
      fullName: this.state.fullName,
      password: this.state.password,
      mobileNumber: this.state.mobileNumber,
      userName:this.state.userName
    }
    const response = ProfileRequestMethod(data);
    
    response.then(res => {
      console.log(res.data);
      localStorage.removeItem('token')
      localStorage.removeItem('loginId')
           this.props.history.push('./Login');
    }
).catch(() => {
      console.log("Coundn't update the profile")
      
    })
  }
  render() {

    return (
      <>
              <Card className="logincard">

                <form className=" container p-5 bg-light text-primary mx-auto" id='form' onSubmit={this.submitHandler} >
                <div className="form-group" style={{width:'100%'}}>
            <h1 className='display-3 text-dark' style={{backgroundColor:'#A03037',width:'100%'}}>Profile</h1>
          </div>
          <div className="form-group" style={{marginTop:'15px',fontWeight:'bold', marginnRight:'100px'}}>
            <label for="fullName" style={{marginTop:'5px'}}>FullName </label>
            <input type="text" id="fullName" className="form-control " onChange={this.fullNameHandler} style={{ marginRight:'100px'}}/>

          </div>
          <div className="form-group" style={{ marginTop: '15px',fontWeight:'bold', marginnRight:'100px' }}>
            <label for="password" style={{marginTop:'15px'}}>Password </label>
            <input type="password" id="password" className="form-control " onChange={this.passwordHandler} style={{marginTop:'10px', marginRight:'105px'}} />
          </div>
          <div className="form-group" style={{ marginTop: '15px',fontWeight:'bold', marginnRight:'100px' }}>
            <label for="mobileNumber" style={{marginTop:'15px'}}>MobileNumber </label>
            <input type="mobileNumber" id="mobileNumber" className="form-control " onChange={this.mobileNumberHandler} style={{marginTop:'10px', marginRight:'120px'}} />
          </div>
          <div className="form-group" style={{ marginTop: '15px',fontWeight:'bold', marginnRight:'100px' }}>
            <label for="userName" style={{marginTop:'15px'}}>UserName </label>
            <input type="userName" id="userName" className="form-control " onChange={this.userNameHandler} style={{marginTop:'10px', marginRight:'105px'}} />
          </div>
          {
            this.state.showError ? <div className="form-group text-danger" id="error">Email or Password is incorrect </div> : null
          }
          <Button type="submit" className="btn btn-success" id="submitBtn"  style={{ background:' #A03037',fontWeight:'bold',color:'Balck',marginTop:'20px',height:'30px',width:'100px'}}>Update</Button> 

        </form>
        </Card>

      </>
    )
  }
}
export default editProfile;
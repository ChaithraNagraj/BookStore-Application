import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { Card, Snackbar, IconButton } from "@material-ui/core";
import Registration from '../user/Registration';
import Login from '../user/Login';
import "./profile.css";
class profile extends  Component {
    constructor(props) {
        super(props)
        this.state = {
   SignUp:"",
   Login:  ""  
}
    }

    onClickSignupHandler () {
        //  this.props.history.push('../../Registration')
        window.location.assign('./Registration');

            }

    
            onClickLoginpHandler () {
                // this.props.history.push('../../Login')
                window.location.assign('./Login');

                   }
       
    
    
    render() {

        return (
          
                  <Card className="Profilecard">
                
                  <Button  style={{backgroundColor:'#A03037',color: 'black',marginLeft:"4%",marginTop:'70%'}}
                      variant="contained"
                      onClick={this.onClickSignupHandler}
                    >
                      SignUp
                    </Button>

                    <Button  style={{backgroundColor:'#A03037',color: 'black',marginLeft:"10%", marginTop:'70%'}}
                      variant="contained"
                      
                      onClick={this.onClickLoginpHandler}
                    >
                      Login
                    </Button>
    
     </Card>
                 

  
  )}
    }

export default profile;
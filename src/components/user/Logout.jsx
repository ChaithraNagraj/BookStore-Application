import React, { Component } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import { withRouter } from 'react-router-dom'

import Card from '@material-ui/core/Card';
import'./Logout.css';
 class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,


        }
    }

    logout=() => {
        console.log("log out component")
        localStorage.removeItem('token')
        localStorage.removeItem('loginId')
        this.props.history.push("/login")
       
    }

  
    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
        
                     <Card className="logoutCard">
                        <div className="logout">
                            
                         <div>                      
                            <span style={{fontWeight:'bolder'}}>
                               Are you sure! you want to Logout ?
           
                            </span>
                         </div>
                         <div className="logoutButton" style={{marginTop:'40px',marginLeft:'100px'}}>
                            <Button variant="contained" color="primary" onClick={this.logout} >
                                Logout
                            </Button>
                        </div>


                        </div>
                    </Card>
            
        


        )
    }
}
export default withRouter(Logout);
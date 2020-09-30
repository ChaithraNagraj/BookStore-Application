import React, { Component } from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import { Button, Popover } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Popup from "reactjs-popup";
 import book from '../../assets/education.svg';
 import Avatar from 'react-avatar-edit';
 import ReactModalLogin from "react-modal-login";
 import { facebookConfig, googleConfig } from "./social-config";

import {getCartAddedCountRequestMethod} from '../../services/CartServices';
import "./header.css";
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
// import bookImage from '../../assets/bbbb.jpg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' ,
        loginId: localStorage.getItem('loginId'),
        login:false,

        loginValue:''};
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.handleGoToCart=this.handleGoToHome.bind(this);
        

      }
       
    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }
    
      hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }
      handleGoToHome(event) {
        window.location.reload(false);
    
      }


  handleGoToLogin(event){
    window.location.assign('./Login')    
  }

  
  handleGoToLogout(event){
    window.location.assign('./Logout')

  }
  EditHandler(even){
window.location.assign('./editProfile')
  }

  // #google login
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
    window.location.assign('../../bookstoreApplication');


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
        console.log(this.props.cartCount);
        console.log(this.state.loginId);
        const abc =(this.state.loginId);
        console.log(abc);
        return (

            
            <>
                <div className='header'>
                    <div className='book-logo-search-div' style={{marginLeft:'-10px'}}>
                        <div className='book-logo-div' onClick={() => this.handleGoToHome()}>
                            <img className='img' id='book' src={book}/>
                        </div>
                        <div className='book-title'onClick={() => this.handleGoToHome()}>
                            <h2 className='title'>BookStore</h2>
                        </div>

                        <div className='search-div' style={{marginTop:'8px'}}>
                            <TextField
                                className='search-textfield'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                id="outlined-basic"
                                placeholder='search'
                                variant="outlined" 
                                onChange={this.props.searchHandler}   
                                />
                        </div>
                    </div>
                    <div className='cart-wishlist-div'>
                        <div className='cart-div'>
                            <span className='Stack-over' id='lblCartCount'> {this.props.cartCount} </span>

                            <Button id='icon-btn' onClick={this.props.cartIconClickedHandler}  ><ShoppingCartIcon fontSize='large'/></Button>
                        </div>
                        <div className='wishlist-div'  >
                        <span className='Stack-Over' id='lblWishListCount'> {this.props.wishlistCount} </span>
                           <Button id='icon-btn' onClick={this.props.wishListIconClickedHandler}> <FavoriteIcon fontSize='large' /> </Button>
                        </div>
     <div className="Sign">  
        <Popup
        trigger={open => (
         <AccountCircleIcon fontSize='large' style={{ color: 'white',marginRight:'50px', marginTop:"10px"}}/>
        )}
        position="left center"
        closeOnDocumentClick
      >
            <div className="modal" style={{width:"20",height:"300px"}}>
              
          
                  <AccountCircleIcon fontSize='large' style={{ color: 'black',marginTop:"110px",marginLeft:"60px"}}/>
                  
               <If condition={abc==null}  >
          <Then>
<div>
           <Button
           style={{backgroundColor:'#A03037',marginLeft:"20px",marginTop:"60px"}}
           onClick={this.handleGoToLogin}> Login/SignUp </Button>
           <button onClick={() => this.openModal()} style={{background:'A03037',marginLeft:'20px'}}>SocialLogin</button>

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
              label: "Continue with Google",
              
            }
            
          }}
        />
                       

      </div>

          
         </Then>
        <Else>
          <Then>

            
            <div style={{color:'black',marginTop:'20px'}}> 
               {abc}
               
            </div>
                 <Button
                         style={{backgroundColor:'#A03037',marginLeft:"50px",marginTop:"20px"}}

               onClick={this.EditHandler}> EditPro </Button>
<Button
        style={{backgroundColor:'#A03037',marginLeft:"50px",marginTop:"20px"}}
               onClick={this.handleGoToLogout}> Logout  </Button>

                        </Then>  
        </Else>
</If>
          
          </div>

      </Popup>
      </div>

             </div>
                </div>
                
            </>
        )

    }
}
export default Header;
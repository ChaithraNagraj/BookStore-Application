  
import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Coupon from "./Coupon";




import {
    getCartAddedCountRequestMethod, getCartValuesRequestMethod,
    deleteCartValueRequestMethod, getCustomerAddressRequestMethod, addCustomerDetailsRequestMethod,addQuantityRequestMethod,subQuantityRequestMethod
} from '../../services/CartServices';
import { checkoutRequestMethod } from '../../services/Checkout';
import OrderPlaced from  './OrderPlaced'
import "./Abcart.css";
import Popup from "reactjs-popup";
import OrderSummary from  './OrderSummary';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';

import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';


export class Abcart extends Component {
        constructor(props) {
        super(props)
        this.state = {
            orderID: 0,
            cartItem: 0,
            quantity: 1,
            descrption:'abc',
            // i m taking this dummy data for checking purpose
            cart:[],
            total:"",
            showCustomerDetails:false,
            showOrderSummery: false,
            showOrderPlacedPage: false,
            showOrderSuccessful: false,
            sameBook: 1,

            name: "chaithra",
            phoneNumber: '7676169508',
            pincode: '560068',
            city: "Bangalore",
            address: "#112,4th cross muneshwara layout",
            landmark: "Add resaturant",
            addressType: "",
            email: "",
            locality:"bangalore",
            incrementDecrementCount: 1,
            ABC:localStorage.getItem('token'),
            errors: {},
            isValid:true,
            
            visibilityOfPopup: false,
            discountTotal: "", discountCoupon: 0, coupons: [], couponStatus: "", couponPrice: 0, coupon: "", index: 0

        }
    } 
    
    componentDidMount() {
        this.getCartValuesRequestMethod();
        }
        getCartValuesRequestMethod = () => {
           let path = {
               path: "cart"
           }

           if (localStorage.getItem('token') === null &&
           localStorage.getItem('local1') != null)
                      {
                        const abc = localStorage.getItem('local1');
                        const xyz =JSON.parse(abc);
             console.log(xyz)
               this.setState({
                //    cart:JSON.parse(localStorage.getItem('cart'))
                //    cart:localStorage.getItem('cart')
               ...this.state.cart=xyz

               })
               console.log(this.state.cart)
           }else{
           getCartValuesRequestMethod(path).then((res) => {
             localStorage.setItem('cartCount',res.data.data.totalBooksInCart)
             const abc=localStorage.getItem('cartCount',res.data.data.totalBooksInCart)

               this.setState({ cart: res.data.data.cartBooks });
               this.setState({
                   cartItem: res.data.data.totalBooksInCart
               })
               console.log(this.state.cart)
           }).catch((err) => {
               console.log(err);
           });
        }
        }
        nameHandler = (event) => {
        const name = event.target.value;
        console.log("name", name);
        this.setState({
            name: name,
        })
    }
    phoneNumberHandler = (event) => {
        const phoneNumber = event.target.value;
        console.log('phoneNumber', phoneNumber)
        this.setState({
            phoneNumber: phoneNumber
        })
    }

    pincodeHandler = (event) => {
        const pincode = event.target.value;
        console.log("pincode", pincode);
        this.setState({
            pincode: pincode
        })
    }
    localityHandler = (event) => {
        const customer_locality = event.target.value;
        console.log('locality', customer_locality)
        this.setState({
            customer_locality: customer_locality
        })
    }
    cityHandler = (event) => {
        const city = event.target.value;
        console.log("city", city);
        this.setState({
            city: city,
        })
    }
    addressHandler = (event) => {
        const address = event.target.value;
        console.log('address', address)
        this.setState({
            address: address
        })
    }
    landmarkHandler = (event) => {
        const landmark = event.target.value;
        console.log("landmark", landmark);
        this.setState({
            landmark: landmark,
        })
    }
    typeHandler = (event) => {
        const type = event.target.value;
        console.log('type', type)
        this.setState({
            type: type
        })
    }
    // -------------------validation for address-------------------------
    axios = event => {
        this.setState ({
          [event.target.name]: event.target.value,
        });
      };

      validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (!this.state.name) {
            errors['name'] = "*name name can not be empty";
            formIsValid = false;
          }

          if (!this.state.phoneNumber) {
            errors['phoneNumber'] = "*Phone number can not be empty";
            formIsValid = false;
        }

        if(!this.state.pincode){
            errors['pincode']= "*Pincode can not be empty";
            formIsValid=false;
        }
        if(!this.state.locality){
            errors['locality']= "*locality can not be empty";
            formIsValid=false;
        }
        if(!this.state.city){
            errors['city']= "*city can not be empty";
            formIsValid=false;
        }
        if(!this.state.city){
            errors['city']= "*city can not be empty";
            formIsValid=false;
        }
        if(!this.state.address){
            errors['address']= "*address can not be empty";
            formIsValid=false;
        }
        if(!this.state.landmark){
            errors['landmark']= "*landmark can not be empty";
            formIsValid=false;
        }
        this.setState ({
            errors: errors,
          });
          return formIsValid;
      };



      //--------------------validation for address------------------------


    //   onSubmit = () =>{
    addCustomerDetailsHandler = (event) => {
        console.log("Hello world*******************************")
        event.preventDefault();
        //const email = window.sessionStorage.getItem('email');
        //console.log(`email is ${email}`);
        console.log(this.validateForm())
        if (this.validateForm ()) {

        var data = {
            // email: this.state.email,
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            pincode: this.state.pincode,
            city: this.state.city,
            landmark: this.state.landmark,
            addressType: this.state.addressType,
            locality: this.state.locality
        }
        console.log("hi Snuffy")
        //need to write method to send data to db
        console.log(data);
         addCustomerDetailsRequestMethod(data).then((response) => {
            console.log(response.data, "-----------------data---------------");
        })
        this.setState({
            showCustomerDetails:false,
            showOrderSummery: true

        })
    }
    

}

sameBookAddHandler = (event,id) => {
     let count = this.state.incrementDecrementCount;
     this.setState({
         incrementDecrementCount: count + 1
     })
 }
 sameBookRemoveHandler = (id) => {
     let count = this.state.incrementDecrementCount;
     this.setState({
         incrementDecrementCount: count - 1
     })
 }




    addQuantity =  async (data) => {
        let count=this.state.cartItem;
        let a=this.state.price;
        let b=this.state.total;
        if(this.state.cartItem<=5){   
this.setState({
            countItems: count+1
        });
        this.state.cart.forEach((ele)=>{
           this.state.total = ele.price*count;
           localStorage.setItem('Discount', ele.price*count);
        });
    }else{
        alert(" oops!!!! totol 5 items can be avaible in a cart ")
    }  
    const response = addQuantityRequestMethod(data);
        const cartValuesRes = getCartValuesRequestMethod();
        cartValuesRes.then(
            res => {
                this.setState({
                    cart: res.data.data.cartBooks,
                    cartItem: res.data.data.totalBooksInCart

                })
                
            }
        )
    }



    substractQuantity = async (data) => {
        let count=this.state.quantity;

        if(this.state.quantity>=1){

        
        this.setState({
            quantity: count - 1


        });

        this.state.cart.forEach((ele)=>{
           this.state.total = this.state.total-ele.price;
         });
        }else{
            alert("quanity cannot be zero")
        }

  const response = subQuantityRequestMethod( data);
            const cartValuesRes = getCartValuesRequestMethod();
        cartValuesRes.then(
            res => {
                this.setState({
                    cart: res.data.data.cartBooks,
                    cartItem: res.data.data.totalBooksInCart

                })
                
            }
        )
    }
    placeorder = event => {
        this.setState({
            placeorder : true
        })
    }
   
    totalCost=(id) =>{
        
        let total = 0;
        this.state.book.forEach((book)=>{
            total = book.price;
        });
        console.log("the total price is" + total)

    }
    
     
    customerDetailsShowHandler = (event) => {
        this.setState({
            showCustomerDetails:true
        })
    }
    orderSummeryShowHandler = async () => {
        let doesShowOrderSummary = this.state.showOrderSummery;
        let doesShowCustomerDetails = this.state.showCustomerDetails;
        this.setState({
            showOrderSummary: !doesShowOrderSummary,
            showCustomerDetails: !doesShowCustomerDetails
        })     
    }
    orderSummeryShowHandler = async () => {
        let doesShowOrderSummery = this.state.showOrderSummery;
         this.setState({
            showOrderSummery: !doesShowOrderSummery
        })
    }
        
    
    
orderPlacedPageHandler = (event) => {
    event.preventDefault();
    var data = {
      amount: this.state.discountCoupon,
      discount: this.state.couponPrice
    }
    const response = checkoutRequestMethod(data);
    response.then(res => {
      console.log(res.data);
      
      localStorage.setItem('token', res.data.token);
         var ch= localStorage.setItem('order_id',res.data.order_id);
          console.log(ch)
      localStorage.removeItem('cartCount')
    window.location.assign('./OrderSummary')

    })
    
  }

    removeFromCart = async (data) => {
        const response = deleteCartValueRequestMethod(data);
        await response.then(res => {
            console.log(res.data)
            const cartCountRes = getCartAddedCountRequestMethod();
            cartCountRes.then(
                res => {
                    this.setState({
                        cartAddedCount: res.data.data.cartBooks
                    }) 
                }
            )
            const cartValuesRes = getCartValuesRequestMethod();
            cartValuesRes.then(

                res => {
                    this.setState({
                      
                        cart: res.data.data.cartBooks,

                    })
                }
            )
        })
        

    }

    checkoutClickHandler = () => {
        const doesShowOrderSuccessful = this.state.showOrderSuccessful;

        let orderID = Math.floor(Math.random() * 90000) + 10000;
        this.setState({
            showOrderSuccessful: !doesShowOrderSuccessful,
            orderID: orderID
        })
    }
    handleGoToSBI = () => {
        
    }
    getCoupon = () => {
        this.setState({
            visibilityOfPopup: true
        })
    }
    handleClose = () => {
        this.setState({
            visibilityOfDialogBox: false
        })
    }

    
    handleTotalPrice = (data) => {
       var xs= localStorage.getItem('Discount');

            this.setState({
            visibilityOfDialogBox: false,
            coupon: data,
            CouponApplied:"HDFC100MNK",
            couponPrice: 100,
            discountCoupon:data-100
            

            
        })
    }

    handleTotalPrice2 = (data) => {
        var xs= localStorage.getItem('Discount');

            this.setState({
            visibilityOfDialogBox: false,
            coupon: data,
            CouponApplied:"SBI100MNK",

            couponPrice: data*0.1,
            discountCoupon:data*0.9
            

            
        })
    }
            
        render() {
        const ABC =localStorage.getItem('token');
        console.log(ABC);
      const npm =localStorage.getItem('local1');
      console.log(npm)
        return (
           
                   <Container maxWidth="lg">            

                <div >
                <Grid item xs={10}>
                        <div  className="Customer-address-div" style={{marginTop:'78px'}}>    
                        <Typography id='mycart-title'variant="h4">My cart ({this.state.cartItem})</Typography>
     
                      <If condition={ABC==''} >
                        <Then>
                                  {npm}    
                               </Then>
                            
                             
                         <Else>
                                  <Then>
            

                            {
                                this.state.cart.map((ele) => {
                                    return (
                                       
                                        <div >
                                        <div>
                                            <div >
                                                <div>
                                                <div className="book-details-divcart" >

                                                <div className="img-book">
                                                  {/* <img src={""} className="order-logo" /> */}
                                                  <img id='img-book' src={ele.book.imageURL} />

                                                </div>
                                                    
                                
                                             <div className="aligncontentbesidepic">
                                                <div >
                                                    <h4 className="h4-div">{ele.book.bookName}</h4>

                                                </div>
                                                <div className="author-name-div">
                                                    <p>{ele.book.authorName}</p>
                                                </div>
                                                <div className="book-price-div">
                                                    <p>Rs. {ele.bookQuantity *ele.book.price}</p>
                                                </div>
                                                <div className="quantity-div" >
                                                     <Button
                                                 onClick={() =>this.substractQuantity(ele.cartBookId)}
                                                                >
                                                    <RemoveCircleOutlineIcon />
                                                      </Button>

                                                    <div className="input-type" >
                                                        {ele.bookQuantity}
                                                    </div>
                                                    
                                                    <div>

                                                     
                                                     <Button

                                                                    onClick={() => this.addQuantity(ele.cartBookId)}
                                                                >
                                                                    <AddCircleOutlineIcon />
                                                                </Button>
                    
                                                    </div>
                                                    <button
                                                     className="remove-btn" 
                                                     key ={ele.CartId}
                                                      onClick={() => this.removeFromCart(ele.cartBookId)} 
                                                      >Remove</button>
                                                </div>
                                            </div>   
                                          </div> 
                                          </div>                 
                                            </div>
                                      </div>
                                      </div>
                             
                                    )
                                   
                                })
                               
                            }
                            </Then>

                            </Else>
                     </If>
                            {
                                this.state.quantity!=0 ? 
                                <div className="continue-cart-div">
                                    <button
                                    className="continue-shopping-cart-button"
                                   onClick={this.customerDetailsShowHandler}
                                    >PLACE ORDER</button>
                                </div> : null
                            }
                        </div>
                        </Grid>
                        <Grid item xs={10}>
                            <div className="Customer-address-div">
                                 <div className="address-title">
                                    <h3 className="my-cart-h4">Customer Details</h3>
                                </div>
                                {
                                                    this.state.showCustomerDetails ?
                                                        <form >
                                                            <div className="form-group">
                                                            
                                                                 <TextField
           id="outlined-name-input"
           label="Name"
           name="name"
           autoComplete="name"
           margin="normal"
           variant="outlined"
           value={this.state.name}
           className="form-control "

           onChange={this.axios}
                      error={this.state.errors.name}
                      helperText={this.state.errors.name}
                   
         />

                                                                                                                                                                              <TextField
           id="outlined-name-input"
           label="phoneNumber"
           name="phoneNumber"
           autoComplete="name"
           margin="normal"
           variant="outlined"
           value={this.state.phoneNumber}
           
           className="form-control "

           onChange={this.axios}
                      error={this.state.errors.phoneNumber}
                      helperText={this.state.errors.phoneNumber
                    }
                   
         />
          
                                                                
                                                            </div>
                                                            <div className="form-group">
                                                                
                                                                  <TextField
           id="outlined-name-input"
           label="pincode"
           name="pincode"
           autoComplete="name"
           margin="normal"
           variant="outlined"
           className="form-control "
           value={this.state.pincode}
           onChange={this.axios}
                      error={this.state.errors.pincode}
                      helperText={this.state.errors.pincode
                    }
                   
         />

                                                               
                                                                  <TextField
           id="outlined-name-input"
           label="locality"
           name="locality"
           autoComplete="name"
           margin="normal"
           variant="outlined"
           value={this.state.locality}
           className="form-control "

           onChange={this.axios}
                      error={this.state.errors.locality}
                      helperText={this.state.errors.locality
                    }
                   
         />
                                                            </div>
                                                            <div className="form-group">
                                                                
                                                                  <TextField
           id="outlined-name-input"
           label="city"
           name="city"
           autoComplete="name"
           margin="normal"
           variant="outlined"
           value={this.state.city}
           className="form-control "

           onChange={this.axios}
                      error={this.state.errors.city}
                      helperText={this.state.errors.city
                    }
                   
         />

                                                                
                                                                <TextField
           id="outlined-name-input"
           label="landmark"
           name="landmark"
           autoComplete="name"
           margin="normal"
           variant="outlined"
           value={this.state.landmark}
           className="form-control "

           onChange={this.axios}
                      error={this.state.errors.landmark}
                      helperText={this.state.errors.landmark
                    }
                   
         />
                                                            </div>
                                                            <div className="form-group">
                                                                
                                                                 <TextField
                                                                
           id="outlined-name-input"
           label="address"
           name="address"
           autoComplete="name"
           margin="normal"
           variant="outlined"
           value={this.state.address}
           className="address-group " 

           onChange={this.axios}
                      error={this.state.errors.address}
                      helperText={this.state.errors.address
                    }
                   
         />
                                                            </div>
                                                            <div className="type-div">
                                                                <label ></label>
                                                                <div>
                                                                <RadioGroup row aria-label="position" name="position" defaultValue="home">
                                                                    <FormControlLabel value="home" control={<Radio color="primary" />} label="Home" onChange={this.typeHandler} />
                                                                    <FormControlLabel value="work" control={<Radio color="primary" />} label="Work" onChange={this.typeHandler} />
                                                                    <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" onChange={this.typeHandler} />
                                                                </RadioGroup>
                                                                </div>
                                                            </div>

                                                            <div className="continue-cart-div">
                                                            
                                                                <button type="submit" id="continue" className="address-button" style={{backgroundColor:'rgb(110, 18, 18)',color:'white'}} onClick={this.addCustomerDetailsHandler}>CONTINUE</button>

                                                            </div>
                                                        </form> : null
                                                }
                            </div>
                            
                        </Grid>
                        <Grid item xs={10}>
                                            <div className="order-sumary">
                                                <div className="cart-title-div">
                                                    <h3 className="my-cart-h4">Order Summary</h3>
                                                </div>
                                                {
                                                    this.state.showOrderSummery?
                                                    this.state.cart.map((ele) => {
                                                        return (
                                                            <div className="order-details-div">
                                                                <div className="img-book">
                                                                    <img src={ele.book.imageURL} className="order-logo" />
                                                                </div>
                                                                <div className= "aligncontentbesidepic">
                                                                    <div className="book-title-div">
                                                                        <h4 >{ele.book.bookNamw}</h4>
                                                                    </div>
                                                                    <div className="author-name-div">
                                                                        <p>{ele.book.authorName}</p>
                                                                    </div>
                                                                    

                                         <div>
                                         <div className="coupon-div" style={{marginLeft:'50px'}}>
                                        <div className="coupon-div1">
                                        
                                  <Popup                                                            
    trigger={<Button className="Button"
    style={{backgroundColor:'#A03037'}}
    > Apply Coupon </Button>}
    modal
    closeOnDocumentClick
  >
      <div>
      <img src={require("../../assets/HDFC.png")}></img>
      <Button
           style={{backgroundColor:'#A03037',marginLeft:"80px",marginBottom:"80px"}}
           onClick={
               ()=>this.handleTotalPrice (ele.bookQuantity *ele.book.price)}> HDFC 100 OFF on total price</Button>

</div>
<div>
<img src={require("../../assets/SBi.png")}></img>

    <Button
           style={{backgroundColor:'#A03037',marginLeft:"40px",marginBottom:"60px"}}
           onClick={()=>this.handleTotalPrice2(ele.bookQuantity *ele.book.price)}>SBI 10% DISCOUNT </Button>

</div>
  </Popup>

                                      
                                    <div>
                                        
                                        <p><b style={{marginLeft:"9px"}}>Price details</b></p>
                                          <div className="price-sub-div">
                                            

                                            <div className="book-price-div" style={{marginLeft:'10px'}}>
                                                <p>AppiedCoupon : {this.state.CouponApplied}</p>
                                                     <p>Total Price Rs.   {ele.bookQuantity *ele.book.price}</p>

                                            <p className="discount-price">Discount Price Rs. {this.state.couponPrice}</p>
                                        </div>
                                        </div>
                                        <hr className="horizontal-line"/>
                                        <div className="price-main-div">
                                            <b>Total payable Amount: </b>
                                            <b className="total-price">Rs.{this.state.discountCoupon}</b>
                                        </div>

                                    </div>

                                    </div>
                                    </div>
                                            
                                         </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }):null
                                                }
                                                <div className="checkout-div">
                                                    <button 
                                                    className="checkout-button"
                                                        onClick={this.orderPlacedPageHandler}
                                                    >CHECKOUT</button>
                                                    
                                                </div>
                                                
                                            </div>
                            
                                        </Grid>

                   
                </div>
                            </Container>

           
        )
    }
}

export default Abcart;

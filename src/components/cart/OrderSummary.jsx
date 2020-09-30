import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import orderImage from '../../assets/SuccessPage.jpg';
import {withRouter } from 'react-router-dom';
import Popup from "reactjs-popup";

class OrderSummary extends Component {
    constructor(props)
    {
        super(props)
        this.state={
        }
    
    }
    
    continueShoppingHandler=()=>{
        this.props.history.push('../../bookstoreApplication');

        window.location.reload();
    }
    reiewHandler=()=>{
        
     this.props.history.push('../../review');
    }
    addReviewHandler=()=>{
        
        this.props.history.push('../../reviewForBook');
       }
    render() {
        return (
            <>
                <div className='order-main-div'>
                <Typography id='order-summary-title' variant='h3'></Typography>
                <div className='order-image-div'>
                <img className='img' id='img-ordersummary' src={orderImage}/>
                </div>
                <p><b>Hurray!! your order is confirmed ,<br />
                the order id is #{this.props.orderID} save the order id for<br />
                further communication...</b></p>
                <div className='table-responsive' id='table-div'>
                    <td>
                    <table class=" table table-bordered" id='address-table'>
                
                      <thead>
                            <tr className="table-coloumn">
                                <th  style={{ borderRight: '1px solid #000',borderBottom:'1px solid black'}}
>Email us</th>
                                <th >Contact us</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="table-data">
                                <td >admin@bookstore.in</td>
                                <td>9739739764</td>
                                <td>#112,ChaithraNagraj happy homes,<br /> 2nd main, 2nd stage,Bommanahalli,Bangalore </td>
                            </tr>
                        </tbody>
                    

                    </table>  
                      </td>    
                </div>
                <div>
                <Button variant='outlined'
                 color='primary'
                 style={{marginTop:'20px'}}
                 onClick={this.continueShoppingHandler}>Continue Shopping</Button>
                   <Button variant='outlined'
                 color='primary'
                 style={{marginLeft:'20px',marginTop:'20px'}}
                 onClick={this.reiewHandler}>Add Review

                 </Button>
                 
<Button 
variant='outlined'
color='primary'
style={{marginLeft:'20px',marginTop:'20px'}}
               onClick={this.addReviewHandler}>Add ReviewForBook</Button>

                 </div>
                 


              
            </div>
            </>
        )
    }
}
export default withRouter(OrderSummary);
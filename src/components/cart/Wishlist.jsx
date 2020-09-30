import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { getWishlistValuesRequestMethod , AddWishlistRequestMethod }  from '../../services/wishlistServics';
import './wishlist.css';
class Wishlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderId: 0,
            wishlistItem: 1,
            quantity: "",
            descrption:'abc',
            wishlist:[],
            clickId:[],
            total:"",
            incrementDecrementCount: 1
        }
    } 

    componentDidMount() {
        this.getWishlistValuesRequestMethod();
        }
        getWishlistValuesRequestMethod = () => {
           let path = {
               path: "wishlist"
           }
           getWishlistValuesRequestMethod(path).then((res) => {
               this.setState({ wishlist: res.data.data});
           }).catch((err) => {
               console.log(err);
           });
        }
    
        RemoveMethod = async (data) => {



                        }
    render() {
        return (
            <>
                {
                    this.state.wishlist.map(ele => {
                        return (
                            <div className='order-summary-div'style={{marginTop:'80px', marginBottom:'190px'}} >
                                <Typography  variant="h5">Wishlist</Typography>
                                <div className='book-image-details-div'style={{marginTop:'50px'}}>
                                    <div className='book-image-div'>
                                    <img id='img-book' src={ele.imageURL} />
                                        {/* <img className='img' id='img-book' src={bookImage}/> */}

                                    </div>
                                    <div className='book-details-div'>
                                        <Typography variant="h5" >{ele.bookName}</Typography>
                                        <Typography>{ele.authorName}</Typography>
                                        <Typography>₹ {ele.price}</Typography>
                                    </div>
                                    <div>
                                    <Button
                                    variant='outlined'
                                    style={{backgroundColor:'#A03037', marginTop:'160px'}}
                                    color='white'>MoveToCart</Button>
                                    <Button                                                
                                      onClick={() =>this.RemoveMethod(ele.cartBookId)}

                                    variant='outlined'
                                    color='white'   
                                    style={{backgroundColor:'#A03037',marginTop:'160px',marginLeft:'10px'}}
                                    >RemoveFromWishlist</Button>
                                  </div>
                                </div>
                            </div>
                        )
                    })

                }

            </>
        )
    }
}
export default Wishlist;
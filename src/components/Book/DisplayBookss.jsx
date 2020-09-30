import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
// import Pagination from '@material-ui/lab/Pagination';
// import { Pagination } from '@material-ui/lab';
import Pagination from '../pagination/Pagination';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip'; 
import Popup from 'reactjs-popup';
import {getReviewForBookApi } from '../../services/getReviewForBookApi';
import RatingStart from './rating';
import review from '../cart/review';

class DisplayBooks extends Component {
    
    constructor (props){
        super (props)        
        this.state ={
            rating:' ' ,
             review: ' ',
            userId:' ',
            review:[]
        }
    }

    addReviewHandler=()=>{
        
        this.props.history.push('../../reviewForBook');
       }


    render() {
        return (
            <>
                <div className='bookcount-sortby-div'>
                    <Typography id='display-book-title' variant='h5'>
                    Books<span id='bookcountfont'>(Found {this.props.bookCount} items,of {this.props.TotalCount})</span>

                        </Typography>
                    <div className='sortby-div'>
                        <select name="Sort By Relevance" id="Sort_By_Relevance" onChange={this.props.sortByRelevanceHandler} >
                            <option value="-1" selected>Sort By Relevance</option>
                            <option name="price:low to high">price: low to high</option>
                            <option name="price:high to low">price: high to low</option>
                            <option name="Newest Arrivals">Newest Arrivals</option>
                        </select>
                    </div>
                </div>
                <div className='display-books-div'>
                    {
                        this.props.books.map((ele) => {
                            
                            // Object.keys(review).map(function(ele) {

                            return (
                                <>
                                
                                    <Card className='note-card' key={ele.bookId}>
                                        
                                        <Tooltip  title={ele.description}> 

                                        <CardActionArea>
                          <Popup
                   trigger={<img id='img-book' src={ele.imageURL}
                //    onClick={
                //     ()=>this.props.getReviewForBook(ele.bookId)}
                   />
                }

    modal
    nested
    
  >

      
      <div style={{marginLeft:'-110px'}}>
<img id='img-book' src={ele.imageURL}
                         onClick={
                            ()=>this.props.getReviewForBook(ele.bookId)}
 />
 
                             
 <Button 
variant='outlined'
color='primary'
style={{marginLeft:'20px',marginTop:'20px'}}
               onClick={this.addReviewHandler}>Add ReviewForBook</Button>
                              
                       
     <Card style={{width:'400px',height:'200px',marginLeft:'110px'}}>
                         <Typography gutterBottom variant="h11" component="h3" style={{marginLeft:'50px'}}>{this.state.review}</Typography>
                         <Typography gutterBottom variant="h11" component="h3" style={{marginLeft:'70px'}}>{this.state.userId}</Typography>
                         <RatingStart  
  rate={{rating:this.state.rating}}

          />

</Card>
  {
      
                         this.state.review.map((ele) => {
         return(
             <>
              <div gutterBottom variant="h11" component="h3">
                                                    {ele.review}
                                                </div>
                                                <RatingStart  
          
  rate={{rating:ele.rating}}

          />

                         
                      </>   
                         )
                        })
                        } 
                    
                    
                    
                
                         

</div>
</Popup>
                                                         <CardContent id='card-content'>
                                                <Typography gutterBottom variant="h11" component="h3">
                                                    {ele.bookName}
                                                </Typography>
                                                <Typography id='note-content' variant="body2" color="textSecondary" component="p">
                                                    by: {ele.authorName}
                                                </Typography>
                                                <Typography id='note-content' variant="body2" color="textSecondary" component="p">
                                                    ₹ {ele.price}
                                                </Typography>
                                                

                                            </CardContent>
                                              </CardActionArea>
                                        </Tooltip>
                                       
                                        <CardActions>

                                        {
                                            this.props.clickedId.includes(ele.bookId) ?
                                            // this.props.clickedId.includes(ele) ?

                                            <Button
                                                variant='outlined'
                                                color='primary'

                                                onClick={()=>{this.props.addToBagClickHandler(ele.bookId)}
                                            
                                        }




                                            > Added to bag</Button> :
                                            <>
                                            
                                            
                                            <Button
                                                variant='outlined'
                                                color='white'
                                                style={{backgroundColor:'#A03037'}}

                                                onClick={()=>{this.props.addToBagClickHandler(ele.bookId)}}
                                                // onClick={()=>{this.props.addToBagClickHandler(ele)}}




                                             > AddToBag</Button>
                                            

                                            <Button
                                                variant='outlined'
                                                color='black'

                                                onClick = {()=>this.props.addToWishlistClickHandler(ele.bookId)}
                                            > WishList</Button>
                                            
                                             </>
                                        }
                                        
                                        </CardActions>
                                       
                                        

                                    </Card>
                                </>
                            );
                        })
                    }
                </div>
                <div className='pagination-div'>
                    <Pagination 
                    count={Math.floor(this.props.bookCount/12)} 
                    color="primary" 
                    onClick={this.props.onChangePaginationHandler} />
                </div>
            </>
        )

    }
}
export default DisplayBooks;
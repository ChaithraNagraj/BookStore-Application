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
            rating:'3 ' ,
             review: 'nyc Book',
            userId:'chaithrabn96@gmail.com ',
rating1:'2',
review1:'nyc',
userId1:'abc@gmail.com'


        }
    }
    addReviewHandler1=()=>{
        
        this.props.history.push('../../reviewForBook1');
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
style={{marginLeft:'20px',marginBottom:'60px'}}
               onClick={this.addReviewHandler1}>Add ReviewForBook</Button>
                             
                                  
                       
     <Card style={{width:'400px',height:'300px',marginLeft:'110px', overflow:'scoll'}}>
                         <Typography gutterBottom variant="h11" component="h3" style={{marginLeft:'50px'}}>{this.state.review}</Typography>
                         <Typography gutterBottom variant="h11" component="h3" style={{marginLeft:'70px'}}>{this.state.userId}</Typography>
                         <RatingStart  
  rate={{rating:this.state.rating}}

          />
          <Typography gutterBottom variant="h11" component="h3" style={{marginLeft:'50px'}}>{this.state.review1}</Typography>
                         <Typography gutterBottom variant="h11" component="h3" style={{marginLeft:'70px'}}>{this.state.userId1}</Typography>
                         <RatingStart  
  rate={{rating:this.state.rating1}}

          />

</Card>
 
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
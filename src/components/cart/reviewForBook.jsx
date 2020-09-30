import React, { Component } from 'react';
import { Button, Popover } from '@material-ui/core';
import { Card, Link } from '@material-ui/core';
import RatingStart from '../Dashboard/rating';
import TextField from '@material-ui/core/TextField';
import { BookReviewRequestMethod} from '../../services/BookReviewServices';
import "./review.css";
// import "./rating.jsx";

class reviewForBook extends Component{
    constructor (props){
        super (props)        
        this.state ={
            rating: 0,
            review: ' ',
            myOrderId: 2
        }
    }
        ratinghandler = (event) =>{
            const rating = event.target.value;
            console.log("rating", rating);
            this.setState({
                rating: rating,
            })
          
        }
reviewhandler =(event)=>{
    const review = event.target.value;
console.log("review",review);
this.setState({
    review:review,
})
}
starhandler =(event)=>{
  const review = event.target.value;
console.log("review",review);
this.setState({
  review:review,
})
}

// reviewfor book submit method
submitHandler = (data) => {
  var aaa =localStorage.getItem('bookk_id');
  var ch= localStorage.getItem('order_id');
console.log(ch)
console.log(aaa)

  var data = {
    rating: this.state.rating,
    review: this.state.review,
bookId:localStorage.getItem('bookk_id'),
// myOrderId:localStorage.getItem("order_id")
myOrderId:this.state.myOrderId
  }
  const response = BookReviewRequestMethod(data);
  response.then(res => {
    console.log(res.data);
    alert("review added successfully");

    this.props.history.push('../../bookstoreApplication');

  })
  
}
    onChnageRating = (rate) => {
      this.setState({rating:rate})
      // ratingQuestion(rate,this.state.parentId)
    }
  
    render() {
        return(
        <>
              <Card className="Reviewcard">
              <form className=" container p-5 bg-light text-primary mx-auto" id='form' onSubmit={this.submitHandler} >
                <div className="form-group" style={{width:'100%'}}>
          </div>

          <RatingStart  
          
          rate={{rating:this.state.rating,onChnageRating:this.onChnageRating.bind(this)}}
          onClick={this.starhandler}

          />
         <TextField
           id="outlined-name-input"
           label="review"
           name="review"
           type="review"
           autoComplete="review"
           margin="normal"
           variant="outlined"
           onChange={this.reviewhandler}
          />
          <Button type="submit" className="btn btn-success" id="submitBtn" 
           style={{ background:' #A03037',fontWeight:'bold',color:'Balck',marginTop:'20px',marginBottom:'20px',height:'30px',width:'100px'}}
                 onClick={this.submitHandler}
            >ADD</Button> 

          </form>
        </Card>

      </>
    )
  }


  }      
    
  export default reviewForBook;
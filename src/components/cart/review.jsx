import React, { Component } from 'react';
import { Button, Popover } from '@material-ui/core';
import { Card, Link } from '@material-ui/core';
import RatingStart from './rating';
import TextField from '@material-ui/core/TextField';
import { ReviewRequestMethod} from '../../services/ReviewServices';
import "./review.css";
// import "./rating.jsx";

class review extends Component{
    constructor (props){
        super (props)        
        this.state ={
            rating: 0,
            review: ' '
            
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
    submitHandler = (event) => {
    event.preventDefault();
    var data = {
      rating: this.state.rating,
      review: this.state.review
    
    }
    const response = ReviewRequestMethod(data);
    response.then(res => {
      console.log(res.data);
      
      console.log(res.data.token);
      console.log(res.data.data.email);
      
      localStorage.setItem('token', res.data.token);
    localStorage.setItem('loginId', res.data.data.email);
    
      if (res.data === data.rating) {
        console("trying to print token")
        console(res.rating)

        this.setState({
          loginAuthentication: true
        })
      }
      this.props.history.push('../../bookstoreApplication');
    }).catch(() => {
      this.setState({
        showError: true
      })
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
            {/* <h1 className='display-3 text-dark' style={{backgroundColor:'#A03037',width:'100%'}}> Login Here</h1> */}
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
    
  export default review;
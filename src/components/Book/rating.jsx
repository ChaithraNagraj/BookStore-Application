import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 import "./rating.css";
export default class RatingStart extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    this.props.rate.onChnageRating(nextValue)
  }
 
 render() {
    const { rating } = this.state;
    
    return (                
      <div className='ratingMain'>
        {/* <h5>Rating : </h5> */}
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.props.rate.rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        {/* <h5> {this.props.rate.rating}</h5> */}
      </div>
    );
  }
}
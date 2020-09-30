import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Radio, TableRow } from '@material-ui/core';

class Pagination extends Component {
  paginate=(pageNumber) =>{
    console.log("page number", pageNumber);

    this.props.paginateNumber(pageNumber)
}

render() {
    const pageNumbers = [];
    for (let index = 1; index <= Math.ceil(this.props.totalPosts / this.props.postsPerPage); index++) {
        pageNumbers.push(index);
    }

    return (
        <div>
        

        <IconButton color="primary" component="span" style={{marginRight:'45%', fontWeight:'bolder'}} >
          {/* <KeyboardArrowLeftIcon onClick={()=>this.props.decfunction()}/> */}
        </IconButton>
        {pageNumbers.map(o => (
          <Button color="black" className="buttonFocus"
            onClick={() => this.paginate(o)}>{o}</Button>
        ))}
        <IconButton color="primary" component="span" style={{ border: '2px' }}>
          {/* <KeyboardArrowRightIcon onClick={()=> this.props.incfunction()}/> */}
        </IconButton>
      </div>
    )
  }
}

export default Pagination;
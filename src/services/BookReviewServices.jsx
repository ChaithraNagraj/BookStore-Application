import axios from 'axios'
const reviewURL='http://localhost:8080/review/{bookId}';


var tokenn=sessionStorage.getItem("token");
console.log("token")
console.log("token from cart service")


let headers = {
      'token': localStorage.getItem('token')
}
var token = localStorage.getItem('token')
var bookId =localStorage.getItem('bookk_id')
//  var myOrderId=localStorage.getItem("order_id")
var myOrderId=1;
export const BookReviewRequestMethod = async (data)=>{
    console.log(data);
    console.log(bookId)
    const response = await axios.post(`http://localhost:8080/review/${bookId}/${myOrderId}`,data, {headers: {'token' :  localStorage.getItem('token')}}

    );
    return response;
}
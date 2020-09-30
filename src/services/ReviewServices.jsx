import axios from 'axios'
const reviewURL='http://localhost:8080/reviewApp';


var tokenn=sessionStorage.getItem("token");
console.log("token")
console.log("token from cart service")


let headers = {
      'token': localStorage.getItem('token')
}
var token = localStorage.getItem('token')

export const ReviewRequestMethod = async (data)=>{
    const response = await axios.post(reviewURL,data, {headers: {'token' :  localStorage.getItem('token')}}
    
    );
    return response;
}
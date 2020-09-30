import axios from 'axios'
const checkoutURL='http://localhost:8080/orders/checkOut';


var tokenn=sessionStorage.getItem("token");
console.log("token")
console.log("token from cart service")


let headers = {
      'token': localStorage.getItem('token')
}
var token = localStorage.getItem('token')

export const checkoutRequestMethod = async (data)=>{
    const response = await axios.post(checkoutURL,data, {headers: {'token' :  localStorage.getItem('token')}}
    
    );
    return response;
}
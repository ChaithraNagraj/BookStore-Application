import axios from 'axios';

const getWishlistValuesURL = 'http://localhost:8080/wishlists/displayItems';

var tokenn=sessionStorage.getItem("token");
console.log("token")
console.log("token from cart service")
let headers = {
    // 'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
}
var token = localStorage.getItem('token')
export const AddWishlistRequestMethod = async (data)=>{

    var bookId=data.bookId
    console.log(data.bookId)
    var abc=''
   const response =await axios.post(`http://localhost:8080/wishlists/addToWishlist/${bookId}`,{},{headers: {'token' :  localStorage.getItem('token')}}
 
        );

    return response;
}



export const getWishlistValuesRequestMethod = async ()=>{
    const response = await axios.get(getWishlistValuesURL,{headers: {'token' :  localStorage.getItem('token')}});
    console.log(response)
    return response;

}

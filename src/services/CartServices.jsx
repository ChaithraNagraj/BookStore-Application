import axios from 'axios'
const deleteCartValueURL = 'http://localhost:8080/api/Cart/DeleteCart';
const addCustomerDetailsURL = 'http://localhost:8080/address/addAddress';
const getCustomerAddressURL = 'http://localhost:8080/api/Address/GetCustomerAddress';
const cartAddedCountURL = 'http://localhost:8080/carts/CountCart';
const getCartValuesURL = 'http://localhost:8080/carts/displayItems';
const getCheckoutURL ='http://localhost:8080/orders/checkOut';
var tokenn=sessionStorage.getItem("token");
console.log("token")
console.log("token from cart service")


let headers = {
      'token': localStorage.getItem('token')
}
var token = localStorage.getItem('token')
export const AddCartRequestMethod = async (data)=>{

     var bookId=data.bookId
    console.log(data.bookId)
    var abc=''
   const response =await axios.post(`http://localhost:8080/carts/addToCart/${bookId}`,{},{headers: {'token' :  localStorage.getItem('token')}} 
        );
    return response;

}


export const getCartAddedCountRequestMethod= async ()=>{
    const response = await axios.get(cartAddedCountURL);
    return response;
}

export const getCartValuesRequestMethod= async ()=>{
    const response = await axios.get(getCartValuesURL,{headers: {'token' :  localStorage.getItem('token')}});
    console.log(response)
    return response;

}
export const deleteCartValueRequestMethod = async (data)=>{

    var cartBookId=data.cartBookId
    var data1=data
   console.log(data.cartBookId)
   console.log(data)

   var abc=''
  const response =await axios.delete(`http://localhost:8080/carts/removeFromCart/${data}`,{headers: {'token' :  localStorage.getItem('token')}} 
       );
       console.log(response)
   return response;

}


export const addCustomerDetailsRequestMethod = async (data)=>{
    const response = await axios.post(addCustomerDetailsURL,data, {headers: {'token' :  localStorage.getItem('token')}}
    
    );
    return response;
}
export const getCustomerAddressRequestMethod = async (data)=>{
    const response = await axios.get(getCustomerAddressURL,{ params: {email: data}});
    return response;

}

export const addQuantityRequestMethod = async (bookId)=>{
    const response = await axios.put(`http://localhost:8080/carts/addQuantity/${bookId}`,{},{headers: {'token' :  localStorage.getItem('token')}})
}

export const subQuantityRequestMethod = async (bookId)=>{
    const response = await axios.put(`http://localhost:8080/carts/removeQuantity/${bookId}`,{},{headers: {'token' :  localStorage.getItem('token')}})
}
//  export const checkoutRequestMethod =async ()=>{

//      const response =await axios.post(getCheckoutURL,{},{headers: {'token' :  localStorage.getItem('token')}}
//      );
// return response;
//  }


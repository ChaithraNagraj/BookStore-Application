import axios from 'axios'
const getReviewForBookURL ='http://localhost:8080/review/{bookId}';




let headers = {
    'token': localStorage.getItem('token')
}
var token = localStorage.getItem('token')

export const getReviewForBookApi = async (data)=>{
    console.log(data);
  const response =await axios.get(`http://localhost:8080/review/${data}`,{headers: {'token' :  localStorage.getItem('token')}} 
       );
       console.log(response);
       
   return response;

}

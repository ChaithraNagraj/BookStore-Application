import axios from 'axios'
const updateURL='http://localhost:8080/users/update';
var token=localStorage.getItem('token')
export const ProfileRequestMethod = async (data)=>{
    console.log(data)
    const response = await axios.put(updateURL,data, {headers: {'token' :  localStorage.getItem('token')}}
    
    );

    return response;
}


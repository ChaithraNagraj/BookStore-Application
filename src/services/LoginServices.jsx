import axios from 'axios'
const loginURL='http://localhost:8080/users/login';

export const LoginRequestMethod = async (data)=>{
    const response = await axios.post(loginURL,data);
    return response;
}
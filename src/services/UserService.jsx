// import axios from 'axios';
// let headers = {
//     'Content-Type': 'application/json'
// }

// export var controller = {
//     userRegister(registrationData){
//         return axios.post("http://localhost:8080/user/register", registrationData, {
//             headers: headers
            
//         });
//     }
    
// }
// export default controller;
import axios from 'axios'
const registerURL='http://localhost:8080/users/register';

export const userRegister = async (data)=>{
    const response = await axios.post(registerURL,data);
    return response;
}
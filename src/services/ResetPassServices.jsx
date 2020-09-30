import axios from 'axios'
const ResetpassURL='http://localhost:8080/users/resetpassword';

export const resetPassword = async (data)=>{
    const response = await axios.put(ResetpassURL,data);
    return response;
}
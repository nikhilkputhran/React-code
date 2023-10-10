import { myAxios } from "../constants/constants";

export const signUp=(user)=>{
    return myAxios.post('/api/v1/blog/users/register',user)
    .then((response)=>response.data)
}
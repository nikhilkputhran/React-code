import { myAxios } from "../constants/constants";

export const loadAllCategories=()=>{
    return myAxios.get('/blog/categories/')
    .then((response)=>response.data)
}
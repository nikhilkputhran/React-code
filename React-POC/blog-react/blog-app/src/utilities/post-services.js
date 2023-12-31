import { privateAxios,myAxios } from "../constants/constants";

import { getToken } from "../utilities/common";
const token= getToken()
export const createPost=(postData)=>{

    return privateAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/posts`,postData
    // {
    //     headers: {
    //         'Authorization': `Bearer ${token}`
    //     }
   // }
    )
    .then((response)=>response.data)
}

export const loadAllPosts=(pageNumber,pageSize)=>{
    return myAxios.get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`)
    .then((response)=>response.data)
}

export const loadPost=(postId)=>{
    return myAxios.get("/posts/" + postId)
    .then((response)=>response.data)
}
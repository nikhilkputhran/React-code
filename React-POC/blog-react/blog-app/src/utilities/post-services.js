import { privateAxios,myAxios } from "../constants/constants";

export const createPost=(postData)=>{
    return myAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/posts`,postData)
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
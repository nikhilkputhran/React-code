export const login=(data,action)=>{
   localStorage.setItem("login",JSON.stringify(data))
   action()
};

export const isLoggedIn = ()  =>{
    let data = localStorage.getItem("login");
    if(data != null) return true
    else return false;
};

export const logout=(action)=>{
    localStorage.removeItem("login");
    action()
}

export const getUserDetails=()=>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("login"))
    }
    else return false;
}
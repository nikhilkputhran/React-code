import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { isLoggedIn } from '../utilities/common';

const PrivateRouting = ()=> {
    
    return isLoggedIn() ? <Outlet /> : <Navigate to={"/login"}/>    

}

export default PrivateRouting

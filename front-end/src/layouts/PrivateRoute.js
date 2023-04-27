import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { useLocalState } from '../utilities/useLocalStorage';

const PrivateRoute = ({children}) => {
    let employeeService = new EmployeeService()
    const [jwt, setjwt] = useLocalState("", "jwt");
    const [isLoading, setisLoading] = useState(true)
    const [isValid, setisValid] = useState(null)
    const [user, setuser] = useLocalState("", "user");

    if(jwt){
 employeeService.tokenControl(jwt,user).then(res=>{  
    
    setisValid(res.data)  
    setisLoading(false)
 })
    }else {
      return <Navigate to="/login" />
    }

    return isLoading ? (<div>Loading</div> ) : isValid===true ? children : <Navigate to="/login" />
}
export default PrivateRoute




//return jwt ? children: <Navigate to="/login" />
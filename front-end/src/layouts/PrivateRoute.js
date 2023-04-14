import React from 'react'
import { Navigate } from 'react-router-dom';
import { useLocalState } from '../utilities/useLocalStorage';

const PrivateRoute = ({children}) => {
    const [jwt, setjwt] = useLocalState("", "jwt");
    return jwt ? children: <Navigate to="/login" />
}
export default PrivateRoute
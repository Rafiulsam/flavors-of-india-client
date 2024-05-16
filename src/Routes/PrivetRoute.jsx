import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';
const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if (loading) {
        return <Spinner />
    }

    if (user) {
        return children
    }
    return  <Navigate to={'/login'} state={{ from: location }} />
      
    
};


export default PrivetRoute;
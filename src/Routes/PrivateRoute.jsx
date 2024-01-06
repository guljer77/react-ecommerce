import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({children}) {
  const {user,loading} = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <h2>Loading.....</h2>
  }

  if(user){
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRoute
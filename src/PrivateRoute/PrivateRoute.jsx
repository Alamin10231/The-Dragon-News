import React, { useContext } from 'react';
import { UserProviders } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(UserProviders);

    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user && user?.email){
        return children;
    }
    
    return (
       
        <div>
             <Navigate to={`/authlayout/login`}></Navigate>
        </div>
    );
};

export default PrivateRoute;
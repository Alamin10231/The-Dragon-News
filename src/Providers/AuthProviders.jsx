import React, { createContext } from 'react';
// import { auth } from '../Firebase.init';
const UserProviders = createContext();

const AuthProviders = () => {
    const authInfo ={
        name:"alamin hossain"
    }
    return (
        <UserProviders.Provider value={authInfo} >

        </UserProviders.Provider>
    );
};

export default AuthProviders;
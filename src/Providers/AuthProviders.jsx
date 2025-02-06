import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase.init';
export const UserProviders = createContext();


const AuthProviders = ({children}) => {
    const [user,setuser]= useState(null)
    const [loading,setloading]= useState(true);
    const signin = (email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword( auth,email,password)
    }
    const createuser = (email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logout = ()=>{
        setloading(true);
        return signOut(auth);
    }
    const updateprofile =(UpdataData)=>{
        return updateProfile(auth.currentUser,UpdataData)
    }
    const authInfo ={
        name:"alamin hossain",
        signin,
        createuser,
        user,
        logout,
        loading,
        updateprofile,
    }
    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth,currentuser=>{
        setloading(false);
            setuser(currentuser)
        })
        return()=>{unsubscribe}
    },[])
    
    return (
        <UserProviders.Provider value={authInfo} >
{children}
        </UserProviders.Provider>
    );
};

export default AuthProviders;
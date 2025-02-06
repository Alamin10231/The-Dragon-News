import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserProviders } from '../../Providers/AuthProviders';

const Register = () => {
  const nevigate = useNavigate()
  const {createuser,updateprofile}= useContext(UserProviders)
  console.log(createuser)
    const handlesubmit =  (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photourl = e.target.photourl.value
        console.log(email,name,password,photourl)
        createuser(email,password)
        .then(result =>{console.log(result.user)
          e.target.reset()
          updateprofile({
            displayName:name,
            photoURL:photourl,
          })
          .then(()=>{
            nevigate("/")
          })
          .catch(error =>{console.log(error.message)})
        })
        .catch(error => {console.log(error.message)

        })
    }
    return (
        <div className=" min-h-screen justify-center items-center mx-auto flex">
 
         
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none ">
            <form className="card-body" onSubmit={handlesubmit}>
            <h2 className='text-center text-lg font-bold'> Register your account</h2>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="Photo Url" name='photourl'  className="input input-bordered" required />
        </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">Register</button>

              </div>
              <p>Already have an account? <Link to="/authlayout/login">login</Link></p>
            </form>
          </div>
      
      </div>
    
    );
};

export default Register;
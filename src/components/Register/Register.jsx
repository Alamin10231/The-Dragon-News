import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className=" min-h-screen justify-center items-center mx-auto flex">
 
         
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none ">
            <form className="card-body">
            <h2 className='text-center text-lg font-bold'> Register your account</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
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
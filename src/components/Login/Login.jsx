import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=" min-h-screen justify-center items-center mx-auto flex">
   
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl ">
      <form className="card-body">
        <h2 className='text-center text-lg font-bold'> Login your account</h2>
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
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
        <p>Dont Have An Account?  <Link to="/authlayout/register"><span className='text-red-400'>register</span></Link></p>
      </form>
    </div>
  </div>

    );
};

export default Login;
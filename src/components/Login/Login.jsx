import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  { UserProviders } from '../../Providers/AuthProviders';

const Login = () => {
  const nevigate = useNavigate()
  const {signin,setuser}= useContext(UserProviders)
  console.log("signin",signin)

  const handlesubmit =  (e)=>{
    e.preventDefault();
   
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    signin(email,password)
    .then(result=>{console.log(result.user)
      
      // setuser(user)
      nevigate("/")
    })
    .catch(error =>{console.log(error.message)

    })

  
}
    return (
        <div className=" min-h-screen justify-center items-center mx-auto flex">
   
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl ">
      <form className="card-body" onSubmit={handlesubmit}>
        <h2 className='text-center text-lg font-bold'> Login your account</h2>
      


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
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const navigate=useNavigate();
//     const btn={color:"red",
// backgroundColor:"yellow"};

// const Inp={color:"blue",
// padding:"20px"}
//     return (
//         <div class="container">
    
//     <h2>Login Form</h2>
//     <label for="uname"><b>Username</b></label>
//     <input type="text" placeholder="Enter Username" name="uname" />

//     <label for="psw"><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" name="psw" /><br/>

//     <button onClick={()=>navigate('/')} type="submit">Login</button>

//   </div>

//     )
// }
// export default Login;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const history = useNavigate();
  const login_id = (e) => {
    console.log(e.target[0].value);
    console.log(e.target[1].value);
  }


  return (
    <>
      <img className='img' src="/LandingPageLogo.svg"></img>
      <div className="App">

        <h1 className='login'>Welcome Back</h1>
        <h4>Login here</h4>
        <div className="form-container">
          <form className="register-form" onSubmit={(e) => {
            login_id(e);
            e.preventDefault();
          }}>
            <label className='heading'>Email</label>

            <input
              id="user-name"
              className="form-field"
              type="text"
              placeholder="Email Id"
              name="email"
            />
            <label className='heading'>Password</label>
            <input
              id="password"
              className="form-field"
              type="passworde"
              placeholder="Password"
              name="password"
            />

            <a href='' onClick={() => history("/forgot")} className='pwd'>Forgot Password</a>

            <button className="form-field" type="submit">
              Login
            </button>
            <label>or Continue With</label>
            <div>
              <div className='text-center'>
                <img className='cursor-pointer' src="/google.svg"></img>
                <img className='cursor-pointer' src="/facebook.svg"></img>
                <img className='cursor-pointer' src="/linked.svg"></img>
                <img className='cursor-pointer' src="/github.svg"></img>
              </div>
            </div>
            <label className='btnform'>Don't have an Account? <span className='reg' onClick={() => history("/register")}>Register</span></label>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;
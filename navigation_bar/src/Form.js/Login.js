const Login=()=>{
    return(<div class="container">
    
    <h2>Login Form</h2>
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" />

    <button type="submit">Login</button>

  </div>
    )
}
export default Login;
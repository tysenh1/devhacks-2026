function Login() {

    
  return (
  <div className="flex flex-col items-center justify-center">
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full lg:w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Enter your email:</label>
        <input type="email" className="input w-full" placeholder="Email" />

        <label className="label">Enter your password:</label>
        <input type="password" className="input w-full" placeholder="Password" />


        <a className="link">Forgot password?</a>

        <button className="btn btn-neutral mt-4">Login</button>

        <br />
        <p>
            Don't have an account?
            <br />
            <a className="link">Register here</a>
        </p>

    </fieldset>

 </div>
);
}

export default Login;
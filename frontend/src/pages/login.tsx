import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({ logInUser }: { logInUser: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()

    logInUser({ email: email, password: password })
    navigate('/upcoming')
  }


  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card bg-base-100 w-full max-w-md shadow-xl">
        <div className="card-body">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-primary">Immunify</h1>
            <p className="text-sm opacity-70">
              Welcome back! Please login to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <legend className="fieldset-legend">Login</legend>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label">
                  <a className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-4">
                <button type="submit" className="btn btn-primary w-full">Login</button>
              </div>
            </fieldset>
          </form>

          <div className="divider">OR</div>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <NavLink to="/register" className="link link-primary font-semibold">
              Register here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

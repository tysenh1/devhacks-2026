import { useState } from "react";
import { NavLink } from "react-router-dom";
import { postSchemas } from "../validation/registerValidation";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phin, setPhin] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validateRegister(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      dateOfBirth,
      email,
      password,
      phin,
    };
    const { error, value } = postSchemas.validate(formData, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const errorMessages: Record<string, string> = {};
      error.details.forEach((detail) => {
        if (detail.path[0]) {
          errorMessages[detail.path[0] as string] = detail.message;
        }
      });
      setErrors(errorMessages);
      console.log(error);
    } else {
      setErrors({});
      console.log("Validation Success");
      console.log(value);
    }
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-8">
      <div className="card bg-base-100 w-full max-w-md shadow-xl">
        <div className="card-body">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-primary">VaxScene</h1>
            <p className="text-sm opacity-70">
              Create your account to get started.
            </p>
          </div>

          <form onSubmit={validateRegister}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <legend className="fieldset-legend">Registration</legend>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="firstName"
                  className="input input-bordered w-full"
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <span className="text-red-700 text-sm mt-1">
                    {errors.firstName}
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  id="lastName"
                  className="input input-bordered w-full"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <span className="text-red-700 text-sm mt-1">
                    {errors.lastName}
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date of Birth</span>
                </label>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  id="dateOfBirth"
                  className="input input-bordered w-full"
                />
                {errors.dateOfBirth && (
                  <span className="text-red-700 text-sm mt-1">
                    {errors.dateOfBirth}
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="input input-bordered w-full"
                  placeholder="example@site.com"
                />
                {errors.email && (
                  <span className="text-red-700 text-sm mt-1">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                />
                <p className="text-xs opacity-70 mt-1">
                  Must be 8+ characters with uppercase, lowercase, and number
                </p>
                {errors.password && (
                  <span className="text-red-700 text-sm mt-1">
                    {errors.password}
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">PHIN Number</span>
                </label>
                <input
                  type="text"
                  value={phin}
                  onChange={(e) => setPhin(e.target.value)}
                  id="phin"
                  className="input input-bordered w-full"
                  placeholder="Enter your 9-digit PHIN"
                />
                {errors.phin && (
                  <span className="text-red-700 text-sm mt-1">
                    {errors.phin}
                  </span>
                )}
              </div>

              <div className="form-control mt-4">
                <button type="submit" className="btn btn-primary w-full">
                  Register
                </button>
              </div>
            </fieldset>
          </form>

          <div className="divider">OR</div>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <NavLink to="/login" className="link link-primary font-semibold">
              Login here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

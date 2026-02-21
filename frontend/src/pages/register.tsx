import { useState } from "react";
import { postSchemas } from "../validation/registerValidation";
import Navbar from "../components/navbar";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [phin, setPhin] = useState("");

  function validateRegister(event: SubmitEvent): void {
    event.preventDefault();
    const formData = { firstName, lastName, dateOfBirth, phin };
    const { error, value } = postSchemas.validate(formData, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      console.log(error);
    } else {
      console.log("Validation Success");
      console.log(value);
    }
  }

  return (
    <>
      <Navbar />
      <form action="" onSubmit={validateRegister}>
        <div className="flex flex-col items-center justify-center">
          <h1>Registration</h1>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend"></legend>

            <label className="label">First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              className="input"
              placeholder="My awesome page"
            />

            <label className="label">Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              className="input"
              placeholder="my-awesome-page"
            />

            <label className="label">Date of Birth:</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setdateOfBirth(e.target.value)}
              id="dateOfBirth"
              className="input"
            />

            <label className="label">Password:</label>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                id="password"
                type="password"
                required
                placeholder="Password"
                minLength={8}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>

            <label className="label">Email Address:</label>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                id="email"
                placeholder="example@site.com"
                required
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>

            <label className="label">PHIN number:</label>
            <input
              type="text"
              value={phin}
              onChange={(e) => setPhin(e.target.value)}
              id="phin"
              minLength={9}
              className="input"
              placeholder="my-awesome-page"
            />

            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl:btn btn-neutral">
              Responsive
            </button>
          </fieldset>
        </div>
      </form>
    </>
  );
}

export default Register;

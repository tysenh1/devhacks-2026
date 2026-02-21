import { Syringe, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100 shadow-sm w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => navigate('/eligible')}>Eligible Vaccines</a>
            </li>
            <li>
              <a onClick={() => navigate('/upcoming')}>Upcoming Vaccines</a>
            </li>
          </ul>
        </div>
        <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
          Open drawer
        </label>
        <a className="btn btn-ghost text-xl">
          <Syringe /> VaxScene
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Eligible Vaccines</a>
          </li>
          <li>
            <a>Upcoming Vaccines</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">
          <UserRound /> Profile
        </a>
      </div>
    </div>
  );
}

export default Navbar;

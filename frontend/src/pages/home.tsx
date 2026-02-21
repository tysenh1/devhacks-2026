import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-primary">VaxScene</h1>
            <p className="py-6 text-lg">
              Your trusted platform for managing vaccinations and immunization
              records. Stay on top of your health with easy scheduling,
              tracking, and reminders.
            </p>
            <div className="flex gap-4 justify-center">
              <NavLink className="btn btn-primary btn-lg" to="login">
                Login
              </NavLink>
              <NavLink className="btn btn-outline btn-lg" to="register">
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-base-100">
        <h2 className="text-3xl font-bold text-center mb-12">Why VaxScene?</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          <div className="card bg-base-200 w-80 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">📅</div>
              <h3 className="card-title">Easy Scheduling</h3>
              <p>Book your vaccination appointments with just a few clicks.</p>
            </div>
          </div>
          <div className="card bg-base-200 w-80 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">📋</div>
              <h3 className="card-title">Digital Records</h3>
              <p>
                Access your complete immunization history anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="card bg-base-200 w-80 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">🔔</div>
              <h3 className="card-title">Smart Reminders</h3>
              <p>
                Never miss a booster or follow-up with timely notifications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <p className="font-bold text-lg">VaxScene</p>
          <p>Your health, simplified.</p>
          <p className="text-sm opacity-70">
            © 2026 VaxScene. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

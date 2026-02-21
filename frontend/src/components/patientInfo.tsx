// Add a patient param here, so we can dynamically fill out this component.
function PatientInfo() {
  return (
    <div className="card bg-white shadow-xl border border-base-300 p-6 w-full max-w-4xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Avatar & Name */}
        <div className="flex flex-col items-center md:items-start md:border-r md:border-base-300 md:pr-8">
          <div className="avatar">
            <div className="w-24 rounded-full bg-base-300">
              {/* replace the 'seed' query value for aunique avatar */}
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=john"
                alt="Patient avatar"
              />
            </div>
          </div>
          {/* name here */}
          <h2 className="text-xl font-bold mt-4">John Doe</h2>
          {/* email here */}
          <p className="text-gray-500 text-sm">john@example.com</p>
          <button className="btn btn-outline btn-primary btn-sm mt-4">
            Edit Profile
          </button>
        </div>

        {/* Right Column - Info Grid */}
        {/* I forgot what data are we storing so I made this fields up*/}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
          <div>
            <span className="text-gray-500 text-sm">Sex</span>
            <p className="font-semibold">Male</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Age</span>
            <p className="font-semibold">39</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Blood Type</span>
            <p className="font-semibold">O+</p>
          </div>

          <div>
            <span className="text-gray-500 text-sm">Date of Birth</span>
            <p className="font-semibold">Jan 12, 1985</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Health Card #</span>
            <p className="font-semibold">1234-567-890</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Phone</span>
            <p className="font-semibold">+1 (204) 555-1234</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Address</span>
            <p className="font-semibold">123 Main St, Winnipeg</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Emergency Contact</span>
            <p className="font-semibold">John Smith (brother)</p>
            <p className="text-sm text-gray-600">+1 (204) 555-5678</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientInfo;

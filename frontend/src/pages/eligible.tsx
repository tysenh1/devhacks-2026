import Navbar from "../components/navbar";

function Eligible() {
    return (
        <>
        <Navbar />
        {/* grid wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card lg:card-side bg-base-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-transform duration-150 group">
            <div className="card-body">
                <h2 className="card-title">Influenza (Flu)</h2>
                <p>Seniors (65+) are eligible for "Enhanced" versions (high-dose or adjuvanted) for better protection.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary invisible group-hover:visible">Read More</button>
                </div>
            </div>
          </div>
            <div className="card lg:card-side bg-base-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-transform duration-150 group">
                <div className="card-body">
                    <h2 className="card-title">Influenza (Flu)</h2>
                    <p>Seniors (65+) are eligible for "Enhanced" versions (high-dose or adjuvanted) for better protection.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary invisible group-hover:visible">Read More</button>
                    </div>
            </div>
          </div>
        </div>
        
        </>
    )
}

export default Eligible;

        
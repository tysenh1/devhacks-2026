import DueDate from "./duedate";
import { Link } from "react-router-dom";

const defaults = {
  title: "Card Title",
  description: "card's description goes here",
};

function VaccineCard({
  title = defaults.title,
  description = defaults.description,
  dueDate,
  isReadMore = false,
}: {
  title: string;
  description?: string;
  dueDate?: string;
  isReadMore?: boolean;
}) {
  return (
    <div className="card card-border border-3 bg-base-100 w-full">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        {dueDate ? <DueDate dueDate={dueDate} /> : ""}
        {isReadMore ? (
          <div className="card-actions justify-end">
            <Link to="/vaccine-info">
              <button className="btn btn-primary ">Read More</button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default VaccineCard;

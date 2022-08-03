import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <h2 className="quote"> Help your Community </h2>
      <h3 className="quote">
        {" "}
        Find places to volunteer with ease and find volunteers easily with Teer
      </h3>

      <div className="volunteers">
        <h4> Volunteers </h4>
        <h5>
          {" "}
          Need to find places near you to volunteer at? Are only skilled in one
          type of volunteering? With Teer you can do all, find opportunities
          near you, with a specific skill set, contact and start recording all
          your volunteer hours.
        </h5>

        <div className="getstart">
          <Link className="btn-mov" to="/volunteer">
            Get Started
          </Link>
        </div>
      </div>

      <div className="volunteers">
        <h4> Volunteers </h4>
        <h5>
          {" "}
          Need to find places near you to volunteer at? Are only skilled in one
          type of volunteering? With Teer you can do all, find opportunities
          near you, with a specific skill set, contact and start recording all
          your volunteer hours.
        </h5>
      </div>

      <div className="businesses">
        <h4> Businesses </h4>
        <h5>
          {" "}
          Need to find volunteers in your area? Have multiple opportunities to
          list? With Teer you can do all, find volunteers near you, list
          multiple opportunites, and contact volunteers.
        </h5>

        <div className="getstart">
          <Link className="btn-mob" to="/business">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;

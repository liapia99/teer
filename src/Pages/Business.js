import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Business = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, phone, password);
      navigate("/businesshome");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">
          Sign up for a free business account
        </h1>
        <p className="py-2">
          Already have an account yet?{" "}
          <Link to="/signin" className="underline">
            Sign in
          </Link>
        </p>
      </div>
      <div>
        <label for="myfile">Upload a profile picture:</label>
        <br />
        <input type="file" id="myfile" name="myfile" />
      </div>
      <div></div>
      <label>Company Name</label>
      <input />
      <label>Company Address</label>
      <input />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Company Phone</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            className="border p-3"
            type="phone"
          />
        </div>

        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Company's Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3"
            type="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Comapny's Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3"
            type="password"
          />
        </div>
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
          Sign Up
        </button>
      </form>
      <p className="py-2">
        By signing up, you agree to our{" "}
        <Link to="/terms" className="underline">
          Terms of Use
        </Link>{" "}
        <br />
        and our{" "}
        <Link to="/privacy" className="underline">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Business;

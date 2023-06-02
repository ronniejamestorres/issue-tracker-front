import React, { useState } from "react";
import axios from "axios";
import issueimage from "../images/Rectangle16.svg";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const registerUser = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post(
        "https://issue-tracker-app-n4roq.ondigitalocean.app/register",
        {
          username,
          password,
          confirmPassword,
          email,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-white grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
      <div className="border col-span-1 lg:col-span-1">
        <img src={issueimage} alt="pets" className="" />
      </div>
      <div className="p-8 w-96 border col-span-1 lg:col-span-1">
        <h2 className="text-4xl font-abril ">Register</h2>
        <input
          type="text"
          className="w-full p-3 mb-4 border border-primary rounded-2xl shadow-sm bg-white "
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="w-full p-3 mb-4 border border-primary rounded-2xl shadow-sm bg-white "
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-3 mb-4 border border-primary rounded-2xl shadow-sm bg-white "
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-3 mb-4 border border-primary rounded-2xl shadow-sm bg-white "
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="w-full p-3 text-white bg-primary rounded-2xl hover:bg-blue-700"
          onClick={registerUser}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;

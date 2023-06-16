import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import issueimage from "../images/Rectangle16.svg";
import { useNavigate } from "react-router-dom";
import "../App.css";

interface ErrorData {
  message: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const registerUser = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
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
      setError(""); // clear the error message upon successful registration

      // Save the token in localStorage or sessionStorage
      window.localStorage.setItem("token", res.data.token);

      // Redirect user to another page, maybe home or dashboard.
      // This depends on your router setup. Here's an example with react-router.
      // Replace 'YourRouterHistory' with the name you've used for router history in your app.
      navigate("/Login");
    } catch (error) {
      const axiosError = error as AxiosError<ErrorData>;

      if (axiosError.response) {
        if (axiosError.response.status === 400) {
          // Handle user already exists or passwords don't match error
          setError(axiosError.response.data.message);
        } else if (axiosError.response.status === 500) {
          // Handle server error
          setError("A server error occurred, please try again later");
        } else {
          setError("An unknown error occurred");
        }
      } else {
        setError(
          "An error occurred, please check your internet connection and try again"
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-white grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
      <div className="border col-span-1 lg:col-span-1">
        <img src={issueimage} alt="pets" className="" />
      </div>
      <div className="p-8 w-96 border col-span-1 lg:col-span-1">
        <h2 className="text-4xl font-abril ">Register</h2>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <input
          type="text"
          className="w-full p-3 mb-4 border border-indigo-500  rounded-2xl shadow-sm bg-white "
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="w-full p-3 mb-4 border border-indigo-500  rounded-2xl shadow-sm bg-white "
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-3 mb-4 border border-indigo-500   rounded-2xl shadow-sm bg-white "
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-3 mb-4 border border-indigo-500   rounded-2xl shadow-sm bg-white "
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
          className="w-full p-3  rounded-2xl bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white "
          onClick={registerUser}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import login from "../images/login.svg";
import "../App.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://issue-tracker-app-n4roq.ondigitalocean.app/login",
        {
          email: email,
          password: password,
        }
      );

      // Access the token from the response data
      const { message, token } = response.data.message;

      // Handle the token or perform any desired actions
      console.log("Message:", message);
      console.log("Token:", token);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container mx-0 flex justify-center items-center h-screen bg-white">
        <div className="w-full lg:w-1/2 p-10 bg-white lg:rounded-lg xl:rounded-lg lg:shadow-lg">
          <div className="relative w-330 h-285 right-30 bottom-443">
            <img src={login} alt="login" />
          </div>
          <div className="flex justify-center items-center">
            <h1
              style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
              className="text-4xl text-black"
            >
              Welcome back!
            </h1>
          </div>
          <h3
            style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
            className="flex justify-center mt-2 items-center leading-4 text-black"
          >
            New?<span> Create an account</span>
          </h3>

          <form className="mt-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-700"></label>
              <input
                style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-2xl text-gray-950 bg-white mt-2 border-2 shadow-md  border-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-700"></label>
              <input
                style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-2xl text-gray-950 bg-white mt-2 border-2 shadow-md  border-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
              type="submit"
              className="w-full block mt-14 cursor-pointer bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white rounded-2xl px-4 py-3"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

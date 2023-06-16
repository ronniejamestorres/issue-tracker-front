import React, { useContext, useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import login from "../images/login.svg";
import ButtonRegister from "../component/ButtonRegister";
import "../App.css";
interface LoginResponse {
  message: string;
  token?: string;
}

interface ErrorResponse {
  message: string;
}

const Login: React.FC = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post<LoginResponse>(
        "https://issue-tracker-app-n4roq.ondigitalocean.app/login",
        {
          username: username,
          password: password,
        }
      );

      // Access the token from the response data
      const { message, token } = response.data;

      // Handle the token or perform any desired actions
      console.log("Message:", message);
      console.log("Token:", token);
      if (token && authContext) {
        authContext.setIsLoggedIn(true);
        localStorage.setItem("username", username); // Save username in local storage
        navigate("/ShowAll");
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.data) {
        const errorData = axiosError.response.data as ErrorResponse;
        setErrorMessage(errorData.message);
      } else {
        console.error("Error:", axiosError);
      }
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
              className="text-4xl text-black m-4"
            >
              Welcome back!
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                className="w-full px-4 py-3 rounded-2xl text-gray-950 bg-white mt-2 border-2 shadow-md  border-indigo-500  focus:bg-white focus:outline-none "
              />
            </label>
            <label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="w-full px-4 py-3 rounded-2xl text-gray-950 bg-white mt-2 border-2 shadow-md  border-indigo-500  focus:bg-white focus:outline-none"
              />
            </label>
            {errorMessage && <p>{errorMessage}</p>}
            <button
              style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
              type="submit"
              className="w-full block mt-14 cursor-pointer bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white rounded-2xl px-4 py-3"
            >
              Sign in
            </button>
          </form>
          <div
            className="justify-center flex pt-8 lg:pt-40"
            style={{ fontFamily: "Abril Fatface", fontStyle: "cursive" }}
          >
            <ButtonRegister
              onClick={() => navigate("/Register")}
              text="New ? Create an account"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

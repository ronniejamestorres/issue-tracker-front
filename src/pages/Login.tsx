import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface LoginResponse {
  message: string;
  token?: string;
}

interface ErrorResponse {
  message: string;
}

const Login: React.FC = () => {
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
      navigate("/ShowAll"); // navigate to home after successful login
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
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Sign in</button>
    </form>
  );
};

export default Login;

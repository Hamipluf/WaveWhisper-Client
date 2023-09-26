import React from "react";
import Logo from "../assets/logo_transparent.png";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img
            src={Logo}
            alt="Logo de la marca"
            onClick={() => navigate("/")}
            className="w-32 h-24 btn btn-ghost"
          />
        </div>
        <div className="flex-none mx-2">
          <button
            onClick={() => navigate("/register")}
            className="btn btn-secondary btn-wide"
          >
            Register
          </button>
        </div>
      </div>
      <LoginForm />
    </>
  );
}

export default Login;

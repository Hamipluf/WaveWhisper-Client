import React from "react";
import { useNavigate } from "react-router-dom";
// Assets
import Logo from "../../public/logo_transparent.png";
// Components
import Footer from "../components/layout/Footer";
import RegisterForm from "../components/RegisterForm";

function Register() {
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
            onClick={() => navigate("/login")}
            className="btn btn-secondary btn-wide"
          >
            LogIn
          </button>
        </div>
      </div>
      <RegisterForm />
      <Footer />
    </>
  );
}

export default Register;

import React from "react";
import Logo from "../../public/logo_transparent.png";
import { useNavigate } from "react-router-dom";

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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form className="card flex-shrink-0 shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nombre</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ramiro"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Apellido</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Gumma"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="example@hotmail.com"
                  className="input input-bordered"
                />
              </div>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

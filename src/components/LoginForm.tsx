import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
// Variable global
import { url_production } from "../main";
// Intefaces
import { dataUser, dataForm } from "../utils/interfaces";

export default function LoginForm() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>();
  const [succses, setSuccses] = useState<string | null>();
  const [seePasword, setseePasword] = useState<boolean>(false);
  const { mutate, isError, isLoading, data } = useMutation(
    "loginMutation",
    async (dataUser: dataForm) => {
      try {
        const { data }: { data: dataUser } = await axios.post(
          `${url_production}/api/users/login`,
          dataUser
        );
        if (data.success) {
          setSuccses(data.message);
          const token = data.data?.token;
          sessionStorage.setItem("token", token);
          setTimeout(() => navigate("/"), 2000);
          return;
        }
        !data.success && console.warn(data);
      } catch (error: any) {
        console.error("Error de login", error);
        setError(error.response.data.message);
      }
    }
  );
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    if (!email || !password) {
      setError("Porfavor complete los campos ");
      return;
    }

    const dataUser: dataForm = { email, password };

    mutate(dataUser);
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {succses && (
              <div className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{succses}</span>
              </div>
            )}
            {error && (
              <div className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            )}
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  onChange={() => setError(undefined)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                  <span
                    onClick={() => setseePasword(!seePasword)}
                    className="label-text"
                  >
                    {seePasword ? "❌" : "👀"}
                  </span>
                </label>
                <input
                  type={`${seePasword ? "text" : "password"}`}
                  placeholder="password"
                  className="input input-bordered"
                  onChange={() => setError(undefined)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                {isLoading ? (
                  <span className="loading loading-ring loading-lg mx-auto"></span>
                ) : (
                  <button className="btn btn-primary">Login</button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

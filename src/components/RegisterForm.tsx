import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
// Variable globarl
import { url_production } from "../main";
// interfaces
import { dataForm, dataUser } from "../utils/interfaces";
import axios from "axios";
function RegisterForm() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccses] = useState<string | undefined>();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const { mutate, isError, isLoading, data } = useMutation(
    "registerMutation",
    async (dataUser: dataForm) => {
      try {
        const { data }: { data: dataUser } = await axios.post(
          `${url_production}/api/users/register`,
          dataUser
        );
        if (data.success) {
          setSuccses(
            `Bienvenido ${data.data.user.role} ${data.data.user.name}`
          );
          const token = data.data?.token;
          sessionStorage.setItem("token", token);
          setTimeout(() => navigate("/"), 2000);
          return;
        }
        !data.success && console.warn(data);
      } catch (error: any) {
        console.error("Error de register", error);
        setError(error.response.data.message.split("=")[1]);
      }
    }
  );
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const lastname = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    if (!name || !lastname || !email || !password) {
      setError("Porfavor complete los campos ");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas deben coincidir");
      return;
    }
    const dataUser: dataForm = { name, lastname, email, password };

    mutate(dataUser);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
    setPasswordsMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event: any) => {
    setConfirmPassword(event.target.value);
    setPasswordsMatch(event.target.value === password);
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {success && (
              <>
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
                  <span>{success}</span>
                </div>
              </>
            )}
            {error && (
              <>
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
              </>
            )}
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="card flex-shrink-0 shadow-2xl bg-base-100"
          >
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
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                  {!passwordsMatch && (
                    <span className="label-text text-warning">
                      Las contraseñas no coinciden.
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  onChange={handleConfirmPasswordChange}
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

export default RegisterForm;

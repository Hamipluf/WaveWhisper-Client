import React from "react";
import { useNavigate } from "react-router-dom";

function Onboard() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-10/12">
          <div className="">
            <h1 className="text-5xl font-bold">
              Hello Welcome to{" "}
              <span className="font-extrabold text-primary underline">
                WaveWhisper
              </span>{" "}
              Beta
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button onClick={() => navigate("/login")} className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Onboard;

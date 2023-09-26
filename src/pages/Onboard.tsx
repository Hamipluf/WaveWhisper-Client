import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-10/12">
          <div className="">
            <h1 className="text-5xl font-bold">
              Hello Welcome
              <span className="font-extrabold text-primary underline">
                {}
              </span>{" "}
              Beta
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

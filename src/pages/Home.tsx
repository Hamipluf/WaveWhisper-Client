import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
// Variable globals
import { url_production } from "../main";
// Helpers fetch
import { fetchCurrentData } from "../utils/fetchCurrentData";
// Interfaces
import { dataCurrent } from "../utils/interfaces";
function Home() {
  const {
    data,
    isLoading,
    isError,
  }: { data: dataCurrent | undefined; isLoading: boolean; isError: any } =
    useQuery("currentUser", fetchCurrentData);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error al cargar los datos.</div>;
  }
  return (
    <>
      <div className="hero h-screen bg-neutral m-4">
        <div className="hero-content w-10/12">
          <div className="">
            <h1 className="text-5xl font-bold">
              Hello Welcome{" "}
              <span className="font-extrabold text-primary underline">
               {data?.data?.role}  {data?.data?.name}
              </span>{" "}
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

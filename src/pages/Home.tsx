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
  // Array de imagenes para desarrollo
  // @ts-ignore
  const img: [string] = [
    "https://img.freepik.com/foto-gratis/tocadiscos-antiguo-que-reproduce-ia-generativa-disco-discoteca-multicolor_188544-31801.jpg?w=900&t=st=1695914078~exp=1695914678~hmac=c89b40a8e93a0b6ad27a112236b9540b7bf57a87daaa4c4f38bcb9cb42ee00b6",
    "https://img.freepik.com/foto-gratis/cerca-microfono-escenario-conciertos-hermosa-iluminacion_169016-11215.jpg?w=826&t=st=1695914080~exp=1695914680~hmac=c40782ccd379121df2135fd370bb72a7a6ca82d98cc624332f81867c86d7a1f2",
    "https://img.freepik.com/foto-gratis/cerrar-panel-control-mezclador-musica-sonido-sobre-fondo-borroso_169016-16964.jpg?w=740&t=st=1695914082~exp=1695914682~hmac=b42b15b589ac1b5f635562b34cec04eb9f6a13d8876995c62229d917e8d80962",
    "https://img.freepik.com/foto-gratis/retrato-mujer-pelo-rosa-rizado-enormes-auriculares-blancos_197531-24170.jpg?w=740&t=st=1695914085~exp=1695914685~hmac=113e510e2f556286f8e97948855b812fa1f8bf9dd82396b204e108c416d50bb9",
  ];

  return (
    <>
      <div className="hero h-[95vh] bg-neutral m-4 rounded-xl shadow-BigCard ">
        <div className="grid grid-cols-1 m-2 w-full h-3/4 justify-items-center">
          {/* User */}
          <div className="w-11/12">
            <div className="card bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Bienvenido {data?.data?.name}!</h2>
                <p>Recientes escuchados</p>
                <div className="carousel rounded-box">
                  {img.map((img: string, idx: number) => {
                    return (
                      <div key={idx} className="carousel-item mx-10">
                        <div className="card w-52 bg-base-100 shadow-xl justify-center">
                          <figure className="p-4">
                            <img
                              src={img}
                              alt="Imagen de prueba"
                              className="rounded-xl"
                            />
                          </figure>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 m-4 w-11/12 bg-primary rounded-md">
            <h2 className="text-2xl text-secondary mx-4 my-2 font-bold">
              Playlists
            </h2>
            <div className="carousel rounded-box m-2">
              {img.map((img: string, idx: number) => {
                return (
                  <div key={idx} className="carousel-item mx-10">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                      <figure>
                        <img
                          src={img}
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

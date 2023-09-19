import { useState } from "react";
import Logo from "../../../public/logo_transparent.png";

function Sidebar() {
  return (
    <>
      <div className="h-screen bg-base-100 w-1/12 flex flex-col justify-between fixed z-10">
        <div className="">
          <img src={Logo} alt="Logo de la marca" className="w-20" />
        </div>

        <div className="p-4">
          {/* Aquí puedes agregar elementos de la barra lateral */}
          <ul className="mt-2">
            <li className="mb-9 font-extralight text-xs text-info btn btn-ghost btn-sm ">
              Explorar
            </li>
            <li className="mb-9 font-extralight text-xs text-info btn btn-ghost btn-sm ">
              Nosotros
            </li>
            <li className="mb-9 font-extralight text-xs text-info btn btn-ghost btn-sm ">
              Top 10
            </li>
          </ul>
        </div>

        <div className="justify-self-end">
          <div className="avatar">
            <div className="w-20 m-4 rounded-xl">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

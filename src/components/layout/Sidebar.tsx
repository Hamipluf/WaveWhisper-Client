import { useState } from "react";
import Logo from "../../../public/logo_transparent.png";

function Sidebar(props: any) {
  return (
    <>
      <div className="grid grid-cols-11 min-h-screen relative bg-neutral">
        <div className="fixed grid grid-cols-1 h-full content-between m-4">
          {/* Avatar */}
          <div className="">
            <div className="avatar">
              <div className="w-20 rounded-xl">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <p>username</p>
          </div>
          {/* Menu */}
          <div className="">
            {/* Aquí puedes agregar elementos de la barra lateral */}
            <ul className="mt-2 flex flex-col">
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
          {/* Logo */}
          <div className="mb-5">
            <img src={Logo} alt="Logo de la marca" className="w-20" />
          </div>
        </div>
        <div className="col-start-2 col-end-12 m-2">{props.children}</div>
      </div>
    </>
  );
}

export default Sidebar;

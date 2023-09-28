import { useState } from "react";
import Logo from "../../../public/logo_transparent.png";

function Sidebar(props: any) {
  return (
    <>
      <div className="grid grid-cols-8 min-h-screen relative bg-default">
        <div className="fixed">
          <div className="">
            <div className="avatar">
              <div className="w-20 rounded-xl">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>

          <div className="">
            <img src={Logo} alt="Logo de la marca" className="w-20" />
          </div>

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
        </div>
        <div className="col-start-2 col-end-9 m-2">{props.children}</div>
      </div>
    </>
  );
}

export default Sidebar;

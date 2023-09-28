import React from "react";
import Config from "../../assets/configuracion.png";

function NavBar() {
  return (
    <>
      <div className="navbar bg-transparent absolute top-6 justify-around w-10/12">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Music"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="flex-none gap-10 ">
          <div className="flex-1">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost m-1">
                <img src={Config} alt="Configuracion" className="w-6 h-6" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

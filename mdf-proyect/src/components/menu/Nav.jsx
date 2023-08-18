import React, { useState } from "react";
import {
  BuildingStorefrontIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import logo from "../../assets/img/mdf-logo.png";
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-[#f5f5f5] mb-2">
      <ul className="md:flex md:flex-row gap-5 w-full mt-0 pl-[55%] content-center items-center bg-[#f5f5f5] p-5 hidden">
        <li>
          <a
            href="#productos"
            className="text-center flex flex-row justify-center items-center justify-items-center content-center gap-2"
          >
            Productos{" "}
            <span class="material-symbols-outlined text-[#C4AB84] font-bold">
              expand_more
            </span>
          </a>
        </li>
        <li>
          <a
            href="#montessori"
            className="text-center flex flex-row justify-center items-center justify-items-center content-center gap-2"
          >
            Método Montessori{" "}
            <span class="material-symbols-outlined text-[#C4AB84] font-bold">
              expand_more
            </span>
          </a>
        </li>
        <li>
          <a
            href="#pintar"
            className="text-center flex flex-row justify-center items-center justify-items-center content-center gap-2"
          >
            ¿Cómo Pintar?{" "}
            <span class="material-symbols-outlined text-[#C4AB84] font-bold">
              expand_more
            </span>
          </a>
        </li>
        <li>
          <a
            href="#somos"
            className="text-center flex flex-row justify-center items-center justify-items-center content-center gap-2"
          >
            Sobre Nosotros{" "}
            <span class="material-symbols-outlined text-[#C4AB84] font-bold">
              expand_more
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.mdf.com.ar/"
            className="bg-[#EBE4DF] rounded-xl text-center flex flex-row justify-center items-center justify-items-center content-center gap-2 p-3"
          >
            Tienda <BuildingStorefrontIcon className="h-6 w-6 text-[#C4AB84]" />
          </a>
        </li>
      </ul>
      <div id="logo">
        <img
          src={logo}
          alt="logo mdf"
          className="ml-[10%] md:top-14 top-[80px] right-0 md:left-0 md:w-[200px] md:h-[205.40px] w-[100px] h-[102.2px] rounded-full absolute z-1"
        />
      </div>
      <div className="w-full h-14 vector-footer mb-0 fixed z-1 bottom-0"></div>
      <div className="w-full bg-[#f5f5f5] mb-2 md:hidden flex">
        <div className="h-[50px] w-full flex-row justify-center content-center gap-10">
          <p className="font-bold ml-[20%]">
            ¡Bienvenido a MDF - Mundo de fibro!
          </p>
          <button
            className="p-3 rounded-2xl absolute top-0 left-0"
            onClick={handleContactClick}
          >
            <Bars3Icon className="text-[#C4AB84] w-6 h-6 font-bold" />
          </button>
          {isMenuOpen && (
            <div className="menu-resposive z-1 absolute bg-[#F5F5F5] w-[100%] h-[650px] top-0 p-5">
              <div className="flex flex-row justify-center items-center content-center bg-[#EBE4DF] w-full h-[25%]">
                <img
                  src={logo}
                  alt="logo mdf"
                  className="md:w-[200px] md:h-[205.40px] w-[100px] h-[102.2px] rounded-full absolute z-1"
                />

                <button
                  className="p-3 rounded-2xl absolute top-3 right-3"
                  onClick={handleContactClick}
                >
                  <XMarkIcon className="text-[#C4AB84] w-6 h-6 font-bold" />
                </button>
              </div>
              <ul className="flex flex-col justify-center content-center items-center gap-10 font-bold mt-5">
                <li className="border-b-2 border-black w-[80%]">
                  <a
                    href="#productos"
                    className="text-center flex flex-row gap-2"
                  >
                    Productos{" "}
                    <span class="material-symbols-outlined text-[#C4AB84] font-bold ml-[55%]">
                      expand_more
                    </span>
                  </a>
                </li>
                <li className="border-b-2 border-black w-[80%]">
                  <a
                    href="#montessori"
                    className="text-center flex flex-row gap-2"
                  >
                    Método Montessori{" "}
                    <span class="material-symbols-outlined text-[#C4AB84] font-bold ml-[55%]">
                      expand_more
                    </span>
                  </a>
                </li>
                <li className="border-b-2 border-black w-[80%]">
                  <a href="#pintar" className="text-center flex flex-row gap-2">
                    ¿Cómo Pintar?{" "}
                    <span class="material-symbols-outlined text-[#C4AB84] font-bold  ml-[55%]">
                      expand_more
                    </span>
                  </a>
                </li>
                <li className="border-b-2 border-black w-[80%]">
                  <a href="#somos" className="text-center flex flex-row gap-2">
                    Sobre Nosotros{" "}
                    <span class="material-symbols-outlined text-[#C4AB84] font-bold  ml-[55%]">
                      expand_more
                    </span>
                  </a>
                </li>
                <li className="border-b-2 border-black w-[80%]">
                  <a
                    href="https://www.mdf.com.ar/"
                    className="text-center flex flex-row gap-2"
                  >
                    Tienda Online{" "}
                    <BuildingStorefrontIcon className="h-6 w-6 text-[#C4AB84] ml-[55%]" />
                  </a>
                </li>
                <li className="h-[20px]"></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;

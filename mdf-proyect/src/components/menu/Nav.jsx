import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
function Nav() {
  return (
    <div className=" w-full bg-[#f5f5f5] mb-2">
      <ul className="flex flex-row gap-5 w-full mt-0 pl-[55%] content-center items-center bg-[#f5f5f5] p-5">
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
            href="#"
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
            href="#"
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
    </div>
  );
}

export default Nav;

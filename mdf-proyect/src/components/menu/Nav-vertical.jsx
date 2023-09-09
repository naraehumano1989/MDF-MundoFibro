import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
function Vertical() {
  return (
    <div className="flex flex-col text-black font-bold">
      <ul>
        <li className="hover:text-[#C4AB84]">
          <a href="#productos">Productos </a>
        </li>
        <li className="hover:text-[#C4AB84]">
          <a href="#montessori">Método Montessori </a>
        </li>
        <li className="hover:text-[#C4AB84]">
          <a href="#pintar">¿Cómo Pintar? </a>
        </li>
        <li className="hover:text-[#C4AB84]">
          <a href="#somos">Sobre Nosotros </a>
        </li>
        <li>
          <a
            href="https://www.mdf.com.ar/"
            className="border border-[#5a4334] hover:shadow-md hover:text-[#F5F5F5] text-[#5a4334] hover:bg-[#C4AB84] bg-[#F5F5F5] rounded-xl flex flex-row justify-center items-center justify-items-center content-center gap-2 p-3 m-2"
          >
            Tienda <BuildingStorefrontIcon className="h-6 w-6 " />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Vertical;

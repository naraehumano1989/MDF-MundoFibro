import Item from "../productoItem/ProductItem.jsx";
import Sonrisa from "../../assets/img/sonrisa.svg";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import Volver from "../menu/Back.jsx";
function Products() {
  return (
    <div className=" flex flex-col justify-center content-center items-center fondo mt-5">
      <Volver />
      <div className="h-14 vector-fondo"></div>
      <div id="productos" className="mb-10 flex flex-col items-center">
        <h2 className="text-xl mb-2 text-center font-bold">
          Contamos con una línea completa de productos fabricados en MDF, listos
          para pintar.
        </h2>
        <p className="text-2xl text-left m-2">
          ¿Cuáles son los beneficios del MDF?
        </p>
        <ul className="grid grid-cols-1 justify-start justify-items-start mb-10 text-lg">
          <li className="flex flex-row content-center justify-center items-center gap-2">
            <img
              src={Sonrisa}
              alt="Beneficio 1"
              className="w-[20px] h-[20px]"
            />
            <p>Se puede pintar o teñir fácilmente.</p>
          </li>
          <li className="flex flex-row content-center justify-center items-center gap-2">
            <img
              src={Sonrisa}
              alt="Beneficio 2"
              className="w-[20px] h-[20px]"
            />
            <p>Soporta hasta 90 kg.</p>
          </li>
          <li className="flex flex-row content-center justify-center items-center gap-2">
            <img
              src={Sonrisa}
              alt="Beneficio 3"
              className="w-[20px] h-[20px]"
            />
            <p>Con los cuidados necesarios, no se deforma ni se agrieta.</p>
          </li>
          <li className="flex flex-row content-center justify-center items-center gap-2">
            <img
              src={Sonrisa}
              alt="Beneficio 4"
              className="w-[20px] h-[20px]"
            />
            <p>
              Esta hecho de maderas recicladascontribuyendo así a la
              preservación de los recursos naturales.
            </p>
          </li>
        </ul>
        <h1 className="text-3xl mb-5 text-center">Productos destacados</h1>
        <Item />
        <h3 className="font-bold text-center text-xl my-[5%] w-[300px] m-auto">
          Conocé todos nuestros productos acá:
        </h3>
        <a
          href="https://www.mdf.com.ar/"
          className="bg-[#EBE4DF] text-[#C4AB84] hover:bg-white shadow-md rounded-xl md:text-xl text-sm font-bold text-center flex flex-row justify-center items-center justify-items-center content-center gap-2 w-[25%] m-auto py-5 px-2"
        >
          Tienda Online <BuildingStorefrontIcon className="md:h-6 md:w-6" />
        </a>
      </div>
    </div>
  );
}

export default Products;

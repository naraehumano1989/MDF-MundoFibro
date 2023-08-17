import Volver from "../menu/Back.jsx";
import img_pintar from "../../assets/img/pintar-img.jpg";
import Pasos from "../../components/actions/Pasos.jsx";
import Ideas from "../../components/actions/ideas.jsx";
function Pintar() {
  return (
    <div id="pintar" className="bg-white m-auto">
      <Volver />
      <div className="flex flex-row gap-10 justify-center content-center items-center m-10">
        <div>
          <h1 className="font-bold text-2xl text-black z-1 ml-12 text-center">
            ¡Pintar el MDF es muy fácil! ¡Animate!
          </h1>
          <h2 className="font-bold">¿Qué materiales vamos a necesitar?</h2>
          <ul>
            <li className="flex flex-row content-center items-center gap-2">
              <div className="bg-[#C4AB84] w-[10px] h-[10px] rounded-full"></div>{" "}
              Pincel y/o rodillo
            </li>
            <li className="flex flex-row content-center items-center gap-2">
              <div className="bg-[#C4AB84] w-[10px] h-[10px] rounded-full"></div>{" "}
              Papel de diarios
            </li>
            <li className="flex flex-row content-center items-center gap-2">
              <div className="bg-[#C4AB84] w-[10px] h-[10px] rounded-full"></div>{" "}
              Cinta de papel Lija grano medio 220 y grano pequeño 150
            </li>
            <li className="flex flex-row content-center items-center gap-2">
              <div className="bg-[#C4AB84] w-[10px] h-[10px] rounded-full"></div>{" "}
              Pintura Imprimación o base (opcional)
            </li>
          </ul>
          <h2 className="text-center font-bold">
            ¿Qué tipo de pintura es la adecuada?
          </h2>
          Existe una amplia variedad y depende de los resultados que queremos
          lograr. Acrílicos: Se diluyen en agua y es necesario barnizar luego de
          pintar. Son fáciles de usar y se aplican con rodillo o pincel. Existe
          una amplia gama de colores. Aerosoles: Se aplican directamente sobre
          la madera sin necesidad de dar una base previa. Es una pintura muy
          resistente y no necesita barniz. Pintura a la tiza: Se consigue en
          aerosol o para aplicar con pincel. Tienen una terminación mate. Se
          utiliza cera como acabado final. Esmalte acrilico: Es un tipo de
          pintura muy resistente, lavable y no necesita ser barnizado. Barniz:
          Se puede usar transparente o de color. Viene brillante, mate y
          semimate.
          <div className="w-[884px] h-[369px] bg-white">
            <span className="text-black text-[19px] font-semibold">
              Existe una amplia variedad y depende de los resultados que
              queremos lograr.
              <br />
              <br />
              <p className="border-b-4 border-b-[#C4AB84] w-[100px]">
                {" "}
                Acrílicos:{" "}
              </p>
            </span>
            <span className="text-black text-[19px] font-medium">
              Se diluyen en agua y es necesario barnizar luego de pintar. Son
              fáciles de usar y se aplican con rodillo o pincel. Existe una
              amplia gama de colores.
              <br />
              <br />
            </span>
            <span className="text-black text-[19px] font-semibold border-b-4 border-b-[#C4AB84]">
              Aerosoles:{" "}
            </span>
            <span className="text-black text-[19px] font-medium">
              Se aplican directamente sobre la madera sin necesidad de dar una
              base previa. Es una pintura muy resistente y no necesita barniz.{" "}
              <br />
              <br />
            </span>
            <span className="text-black text-[19px] font-semibold border-b-4 border-b-[#C4AB84]">
              Pintura a la tiza:{" "}
            </span>
            <span className="text-black text-[19px] font-medium ">
              Se consigue en aerosol o para aplicar con pincel. Tienen una
              terminación mate. Se utiliza cera como acabado final.
              <br />
              <br />
            </span>
            <span className="text-black text-[19px] font-semibold border-b-4 border-b-[#C4AB84]">
              Esmalte acrilico:{" "}
            </span>
            <span className="text-black text-[19px] font-medium">
              Es un tipo de pintura muy resistente, lavable y no necesita ser
              barnizado.
              <br />
              <br />
            </span>
            <span className="text-black text-[19px] font-semibold border-b-4 border-b-[#C4AB84]">
              Barniz:{" "}
            </span>
            <span className="text-black text-[19px] font-medium">
              Se puede usar transparente o de color. Viene brillante, mate y
              semimate.
            </span>
          </div>
        </div>

        <div className="fondo-pintar flex justify-center items-center content-center">
          <img
            src={img_pintar}
            className="w-[300px] h-[250px] z-1 pt-10 rounded-[70px]"
          />
        </div>
      </div>
      <div className="h-[100px]"></div>
      <Pasos />
      <Ideas />
    </div>
  );
}
export default Pintar;
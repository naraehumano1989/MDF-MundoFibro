import Volver from "../menu/Back.jsx";
import Pasos from "../../components/actions/Pasos.jsx";
import Ideas from "../../components/actions/ideas.jsx";
function Pintar() {
  return (
    <div id="pintar" className="m-auto">
      <Volver />

      <div className="flex md:flex-row flex-col gap-10 justify-center content-center items-center m-10">
        <div className="md:text-2xl text-sm w-full">
          <h1 className="font-bold  text-black text-5xl md:z-1 ml-12 text-center mb-10 mt-5">
            ¡Pintar el MDF es muy fácil!{" "}
            <span className="text-[#C3AB83] font-bold">¡Animate!</span>
          </h1>
          <h2 className="w-[80%] m-auto font-bold text-4xl ml-30">
            ¿Qué materiales vamos a necesitar?
          </h2>
          <ul className="w-[80%] m-auto ">
            <div className="grid grid-cols-3 mt-5">
              <li className="flex flex-row content-center items-center">
                <div className="w-[20px] h-[20px] rounded-full bg-[#C4AB84] mr-2"></div>{" "}
                Pincel y/o rodillo
              </li>
              <li className="flex flex-row content-center items-center gap-2">
                <div className="w-[20px] h-[20px] rounded-full bg-[#C4AB84]"></div>{" "}
                Papel de diarios
              </li>
              <li className="flex flex-row content-center items-center gap-2">
                <div className="w-[20px] h-[20px] rounded-full bg-[#C4AB84]"></div>{" "}
                Cinta de papel
              </li>
            </div>
            <div className="grid grid-cols-2 mt-5">
              <li className="flex flex-row content-center items-center">
                <div className="w-[20px] h-[20px] rounded-full bg-[#C4AB84] mr-2"></div>{" "}
                Lija grano medio 220 y grano pequeño 150
              </li>
              <li className="flex flex-row content-center items-center">
                <div className="w-[20px] h-[20px] rounded-full bg-[#C4AB84] mr-2"></div>{" "}
                Pintura Imprimación o base (opcional)
              </li>
            </div>
          </ul>
          <div className="w-full flex flex-col mt-10">
            <div className="m-auto text-center w-[80%] justify-center items-center content-center bg-[#EDE1D4] p-10 rounded rounded-xl mb-10">
              <h2 className="text-left font-bold text-3xl text-center mt-2 mb-2 ">
                ¿Qué tipo de pintura es la adecuada?
              </h2>
              <p className="md:text-2xl text-sm">
                {" "}
                La elección de la pintura adecuada para trabajar en MDF depende
                de tus necesidades y preferencias personales, así como del
                resultado que desees obtener.
              </p>
            </div>
            <div className="md:w-[884px] md:h-[369px] w-full h-auto mt-5 ml-[10%]">
              <span className="text-black text-[24px] font-semibold ">
                Aquí hay algunas opciones comunes:
                <br />
                <br />
                <div className="rounded bg-[#EDE1D4] p-3 w-[25%] ">
                  <p className="border-b-4 border-b-[#30231a] text-center">
                    Acrílicos:{" "}
                  </p>
                </div>
              </span>
              <span className="text-black text-[19px] font-bold ml-10 text-center">
                Se diluyen en agua y es necesario barnizar luego de pintar. Son
                fáciles de usar y se aplican con rodillo o pincel. Existe una
                amplia gama de colores.
                <br />
                <br />
              </span>
              <div className="rounded bg-[#EDE1D4] p-3 w-[25%]">
                <p className="border-b-4 border-b-[#30231a] text-center font-semibold">
                  Aerosoles:
                </p>
              </div>
              <span className="text-black text-[19px] font-bold ml-10 text-center">
                Se aplican directamente sobre la madera sin necesidad de dar una
                base previa. Es una pintura muy resistente y no necesita barniz.{" "}
                <br />
                <br />
              </span>
              <div className="rounded bg-[#EDE1D4] p-3 w-[25%]">
                <p className="border-b-4 border-b-[#30231a] text-center font-semibold">
                  Pintura a la tiza:{" "}
                </p>
              </div>
              <span className="text-black text-[19px] font-bold ml-10 text-center">
                Se consigue en aerosol o para aplicar con pincel. Tienen una
                terminación mate. Se utiliza cera como acabado final.
                <br />
                <br />
              </span>
              <div className="rounded bg-[#EDE1D4] p-3 w-[25%]">
                <p className="border-b-4 border-b-[#30231a] text-center font-semibold">
                  Esmalte acrilico:{" "}
                </p>
              </div>
              <span className="text-black text-[19px] font-bold ml-10 text-center">
                Es un tipo de pintura muy resistente, lavable y no necesita ser
                barnizado.
                <br />
                <br />
              </span>
              <div className="rounded bg-[#EDE1D4] p-3 w-[25%]">
                <p className="border-b-4 border-b-[#30231a] text-center font-semibold">
                  Barniz:{" "}
                </p>
              </div>
              <span className="text-black text-[19px] font-bold ml-10 text-center">
                Se puede usar transparente o de color. Viene brillante, mate y
                semimate.
                <br />
                <br />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-[300px] h-[25px]"></div>
      <Pasos />
      <Ideas />
    </div>
  );
}
export default Pintar;

import paso1 from "../../assets/img/paso-1.jpg";
import paso2 from "../../assets/img/paso-2.jpg";
import paso3 from "../../assets/img/paso-3.jpg";
function Pasos() {
  return (
    <div id="pasos" className="mt-[150px] mb-0">
      <div className="bg-[#EBE4DF] w-[80%] h-auto m-auto rounded-[100px] flex md:flex-row flex-col justify-center items-center content-center gap-10 mt-10">
        <div className="flex flex-col content-center items-center">
          <img
            src={paso1}
            className="rounded-[50px] w-[250px] h-[200px] ml-5 mt-10"
          />
          <h1 className="text-2xl font-bold text-[#C4AB84] mt-10">
            Paso 1: Lijar
          </h1>
          <p className="w-[300px] text-center mb-10">
            Para preparar el material y garantizar que la pintura agarre, se
            recomienda lijar. Tomar un papel de lija grano medio y frotar la
            superficie, eliminando todo el polvo o suciedad que contenga.
            Después, eliminar los residuos con un trapo seco.
          </p>
        </div>
        <div className="border-e-black border-e-2 h-[50%]"></div>
        <div className="flex flex-col content-center items-center justify-center text-center">
          <img
            src={paso2}
            className="rounded-[50px] w-[250px] h-[200px] ml-5 mt-5"
          />
          <h1 className="text-2xl font-bold text-[#C4AB84] mt-10">
            Paso 2: Colocar una capa de imprimación
          </h1>
          <p className="w-[300px] text-center mt-5 mb-10">
            Este paso es opcional. Lo recomendamos para lograr una mayor
            adherencia de la pintura. Se puede colocar con pincel o rodillo.
          </p>
        </div>
        <div className="border-e-black border-e-2 h-[50%] "></div>
        <div className="flex flex-col content-center items-center">
          <img
            src={paso3}
            className="rounded-[50px] w-[250px] h-[200px] ml-5 mt-5"
          />
          <h1 className="text-2xl font-bold text-[#C4AB84] mt-10">
            Paso 3: Pintar
          </h1>
          <p className="w-[300px] text-center mb-10">
            Aplicar una primera mano de pintura. Esperar 24 hs, volver a lijar
            con lija suave, quitar el polvo y dar una segunda mano. Repetir si
            es necesario. Si la pintura lo amerita, colocar una capa final de
            barniz transparente.
          </p>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
}

export default Pasos;

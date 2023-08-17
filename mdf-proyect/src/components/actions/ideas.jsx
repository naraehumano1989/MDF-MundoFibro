import safari from "../../assets/img/safari-img.png";
import watermelon from "../../assets/img/watermelon-img.png";
import nordica from "../../assets/img/nordica-img.png";
function Ideas() {
  return (
    <div id="ideas" className="bg-[#EBE4DF] boder-2-[#C4AB84]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="88"
        fill="none"
      >
        <path
          d="M-182 44.4896L-182 1.4148e-06L2769 0.000259399L2769 44.4899C2769 44.4899 2726.14 52.2878 2697.29 64.9264C2665.97 78.6387 2645.39 88 2616.65 88C2585.27 88 2569.27 77.5839 2540.42 62.5155C2516.01 49.7826 2489.77 44.4898 2473.89 44.4898C2458.02 44.4898 2431.06 52.2877 2402.18 64.9264C2370.86 78.6387 2350.3 88 2321.57 88C2290.18 88 2274.19 77.5839 2245.31 62.5154C2220.91 49.7826 2212.35 44.4898 2178.79 44.4898C2145.22 44.4898 2135.95 52.2877 2107.07 64.9264C2075.76 78.6387 2055.2 87.9999 2026.46 87.9999C1995.08 87.9999 1979.08 77.5839 1950.21 62.5154C1925.8 49.7826 1899.55 44.4898 1883.68 44.4898C1867.83 44.4898 1840.84 52.2877 1811.96 64.9264C1780.67 78.6386 1760.09 87.9999 1731.36 87.9999C1699.97 87.9999 1683.98 77.5838 1655.12 62.5154C1630.69 49.7826 1617.28 44.4898 1588.6 44.4898C1559.91 44.4898 1545.73 52.2877 1516.88 64.9263C1485.56 78.6386 1465.01 87.9999 1436.27 87.9999C1404.89 87.9999 1388.89 77.5838 1360.02 62.5154C1335.61 49.7825 1309.36 44.4897 1293.49 44.4897C1277.62 44.4897 1250.65 52.2876 1221.77 64.9263C1190.46 78.6386 1169.9 87.9999 1141.17 87.9999C1109.78 87.9999 1093.79 77.5838 1064.91 62.5153C1040.5 49.7825 1031.97 44.4897 998.381 44.4897C964.818 44.4897 955.543 52.2876 926.666 64.9263C895.374 78.6386 874.792 87.9998 846.058 87.9998C814.671 87.9998 798.679 77.5838 769.825 62.5153C745.394 49.7825 719.17 44.4897 703.298 44.4897C687.425 44.4897 660.436 52.2876 631.583 64.9263C600.267 78.6385 579.709 87.9998 550.975 87.9998C519.588 87.9998 503.571 77.5837 474.718 62.5153C450.311 49.7824 439.076 44.4897 408.19 44.4897C379.863 44.4896 365.353 52.2876 336.475 64.9262C305.16 78.6385 284.602 87.9998 255.868 87.9998C224.48 87.9998 208.488 77.5837 179.611 62.5153C155.204 49.7824 146.67 44.4896 113.083 44.4896C79.5205 44.4896 70.2454 52.2875 41.3682 64.9262C10.0767 78.6385 -10.5056 87.9998 -39.2395 87.9998C-70.6267 87.9998 -86.6191 77.5837 -115.472 62.5152C-139.903 49.7824 -166.127 44.4896 -182 44.4896Z"
          fill="white"
        />
      </svg>
      <div>
        <h1 className="font-bold text-2xl m-10">
          ¿No sabés que color elegir? ¡Te dejamos algunas ideas!
        </h1>
      </div>
      <div className="flex flex-row">
        <img
          src={safari}
          alt="inspiracion safari"
          className="rounded-2xl w-[29%] h-[250px] m-10"
        />
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="w-[50px] h-[50px] rounded-full bg-[#287052]"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#B65938]"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#FFAB4A]"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#CDCDCB]"></div>
        </div>
        <div className="flex flex-col justify-center content-center items-center">
          <h2 className="text-3xl font-bold">Inspiración Safari</h2>
          <p className="text-center w-[50%] font-bold">
            Convertí la habitación de los más chicos en un espacio amigable en
            donde convivan todos los animales de la selva. Estos colores son
            perfectos para combinar con ambientes neutros, otorgando calidez y
            personalidad.
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <img
          src={watermelon}
          alt="inspiracion watermelon"
          className="rounded-2xl w-[35%] h-[250px] m-10"
        />
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="w-[50px] h-[50px] rounded-full bg-[#C1789A]"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#DFBBCA]"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#89B684]"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#CFCDC9]"></div>
        </div>
        <div className="flex flex-col justify-center content-center items-center">
          <h2 className="text-3xl font-bold">Inspiración Watermelon</h2>
          <p className="text-center w-[50%] font-bold">
            El color rosa es el favorito de muchos niños. Combinado con tonos de
            verde y gris claro, lograrás una habitación muy original. Además,
            podés sumar algunos marcos o muebles de madera natural para no
            perder la calidez que buscamos lograr en el ambiente.
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <img
          src={nordica}
          alt="inspiracion nórdica"
          className="rounded-2xl w-[49%] h-[250px] m-10"
        />
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="w-[50px] h-[50px] rounded-full bg-[#CCDEDF]"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#89BEC1]"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#DFCDB4]"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#E7D7AD]"></div>
        </div>
        <div className="flex flex-col justify-center content-center items-center">
          <h2 className="text-3xl font-bold">Inspiración Nórdica</h2>
          <p className="text-center w-[50%] font-bold">
            El estilo nórdico busca aportar calidez y luminosidad, utilizando
            elementos naturales como la luz o la madera. Te sugerimos pintar tus
            objetos de MDF en colores claros o combinar algunos planos a color y
            otros al natural. La madera es una de las materias primas preferidas
            en este tipo de decoración y tiene mucho protagonismo en este tipo
            de ambientes.
          </p>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
}

export default Ideas;

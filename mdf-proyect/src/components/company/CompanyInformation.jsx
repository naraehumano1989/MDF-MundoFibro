import familia from "../../assets/img/familia.png";
import Volver from "../menu/Back.jsx";
function Somos() {
  return (
    <div id="somos" className="fondo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="88"
        fill="none"
      >
        <path
          d="M-182 44.4896L-182 1.4148e-06L2769 0.000259399L2769 44.4899C2769 44.4899 2726.14 52.2878 2697.29 64.9264C2665.97 78.6387 2645.39 88 2616.65 88C2585.27 88 2569.27 77.5839 2540.42 62.5155C2516.01 49.7826 2489.77 44.4898 2473.89 44.4898C2458.02 44.4898 2431.06 52.2877 2402.18 64.9264C2370.86 78.6387 2350.3 88 2321.57 88C2290.18 88 2274.19 77.5839 2245.31 62.5154C2220.91 49.7826 2212.35 44.4898 2178.79 44.4898C2145.22 44.4898 2135.95 52.2877 2107.07 64.9264C2075.76 78.6387 2055.2 87.9999 2026.46 87.9999C1995.08 87.9999 1979.08 77.5839 1950.21 62.5154C1925.8 49.7826 1899.55 44.4898 1883.68 44.4898C1867.83 44.4898 1840.84 52.2877 1811.96 64.9264C1780.67 78.6386 1760.09 87.9999 1731.36 87.9999C1699.97 87.9999 1683.98 77.5838 1655.12 62.5154C1630.69 49.7826 1617.28 44.4898 1588.6 44.4898C1559.91 44.4898 1545.73 52.2877 1516.88 64.9263C1485.56 78.6386 1465.01 87.9999 1436.27 87.9999C1404.89 87.9999 1388.89 77.5838 1360.02 62.5154C1335.61 49.7825 1309.36 44.4897 1293.49 44.4897C1277.62 44.4897 1250.65 52.2876 1221.77 64.9263C1190.46 78.6386 1169.9 87.9999 1141.17 87.9999C1109.78 87.9999 1093.79 77.5838 1064.91 62.5153C1040.5 49.7825 1031.97 44.4897 998.381 44.4897C964.818 44.4897 955.543 52.2876 926.666 64.9263C895.374 78.6386 874.792 87.9998 846.058 87.9998C814.671 87.9998 798.679 77.5838 769.825 62.5153C745.394 49.7825 719.17 44.4897 703.298 44.4897C687.425 44.4897 660.436 52.2876 631.583 64.9263C600.267 78.6385 579.709 87.9998 550.975 87.9998C519.588 87.9998 503.571 77.5837 474.718 62.5153C450.311 49.7824 439.076 44.4897 408.19 44.4897C379.863 44.4896 365.353 52.2876 336.475 64.9262C305.16 78.6385 284.602 87.9998 255.868 87.9998C224.48 87.9998 208.488 77.5837 179.611 62.5153C155.204 49.7824 146.67 44.4896 113.083 44.4896C79.5205 44.4896 70.2454 52.2875 41.3682 64.9262C10.0767 78.6385 -10.5056 87.9998 -39.2395 87.9998C-70.6267 87.9998 -86.6191 77.5837 -115.472 62.5152C-139.903 49.7824 -166.127 44.4896 -182 44.4896Z"
          fill="#EBE4DF"
        />
      </svg>
      <Volver />
      <div className="flex md:flex-row flex-col justify-center content-center items-center">
        <div className="md:w-[50%] w-[80%] flex items-center content-center justify-center mt-5">
          <img src={familia} alt="familia unida" />
        </div>
        <div className="flex flex-col md:w-[50%] w-[80%] m-10">
          <h1 className="text-[30px] md:text-[45px] font-bold mt-10">
            Sobre nosotros
          </h1>
          <h2 className="text-[20px] md:text-[35px] font-bold mt-5">
            Nuestra historia
          </h2>
          <p className="mb-10">
            Somos una familia emprendedora que busca crecer y que confía y
            apuesta en la industria argentina. MDF - Mundo de fibro nació de la
            búsqueda de objetos únicos, orientados especialmente a los más
            pequeños. Con el diseño y la creatividad como principal motor,
            buscamos proponer soluciones prácticas e innovadoras para contribuir
            al desarrollo y crecimiento de los más chicos.
          </p>
          <h2 className="text-[20px] md:text-[35px] font-bold">
            Nuestros objetivos
          </h2>
          <p>
            Queremos ser una fuente de inspiración y creatividad para nuestros
            clientes, ofreciendo productos que les permitan expresar su estilo
            personal y transformar sus espacios de manera única y memorable. Nos
            esforzamos por promover la belleza, la funcionalidad y la
            sostenibilidad a través de nuestras creaciones en madera fibrofácil.
            En MDF - Mundo de Fibro, nos inspiramos en las últimas tendencias y
            colaboramos con diseñadores y artesanos talentosos para crear
            productos exclusivos y únicos. Fomentamos la creatividad de nuestros
            clientes, ofreciendo la posibilidad de personalizar sus productos
            según sus preferencias y necesidades.
          </p>
        </div>
      </div>
      <h2 className="text-center text-xl md:text-2xl">
        ¡Nos encanta formar parte de tu familia!
      </h2>
      <div className="h-[100px]"></div>
    </div>
  );
}
export default Somos;

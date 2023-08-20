import portada from "../../assets/img/niño-mdf.jpg";
import Nav from "../menu/Nav.jsx";
function Home() {
  return (
    <div>
      <div className="h-14 vector-fondo"></div>
      <Nav />
      <div id="portada">
        <img
          src={portada}
          alt="foto portada mdf - niño jugando"
          className="w-full md:h-auto h-[450px] m-auto"
        />
      </div>
    </div>
  );
}

export default Home;

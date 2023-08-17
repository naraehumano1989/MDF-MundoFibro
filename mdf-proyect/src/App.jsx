import Home from "./components/principal/home.jsx";
import Productos from "./components/productos/Products.jsx";
import Montessori from "./components/information/Montessori.jsx";
import Pintar from "./components/actions/Pintar.jsx";
import Sobre from "./components/company/CompanyInformation.jsx";
import Footer from "./components/footer/Footer.jsx";
function App() {
  return (
    <div>
      <Home />
      <Productos />
      <Montessori />
      <Pintar />
      <Sobre />
      <Footer />
    </div>
  );
}

export default App;

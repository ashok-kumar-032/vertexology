import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Ourportfolios from "./components/Ourportfolios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Utn from "./components/Utn";
import Sed from "./components/Sed";
import John from "./components/John";
import Tempor from "./components/Tempor";
import Imagesection from "./components/Imagesection";

function App() {
  return (
    <div className="App overflow-hidden">
      <Hero />
      <Ourportfolios />
      <Imagesection/>
      <Utn />
    </div>
  );
}

export default App;

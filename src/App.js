
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Ourportfolios from "./components/Ourportfolios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Utn from "./components/Utn";

function App() {
  return (
    <div className="App">
      <Hero />
      <Ourportfolios/>
      <Utn />
    </div>
  );
}

export default App;

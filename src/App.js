
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynav from "./components/Mynav";
import Hero from "./components/Hero";
import Ourportfolios from "./components/Ourportfolios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      {/* <Mynav /> */}
      <Hero />
      <Ourportfolios/>
    </div>
  );
}

export default App;

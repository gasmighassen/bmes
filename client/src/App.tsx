import "./_dist/App.css";
import ButtonBmes from "./components/button/ButtonBmes";
import CarousselBmes from "./components/caroussel/CarousselBmes";
import NavbarBmes from "./components/navbar/NavbarBmes";

function App() {
  return (
    <div className="App">
      <NavbarBmes />
      <div className="slougan-bmes">
        <div className="slougan-text">
          <p>
            Une nouvelle
            <span className="bmes-blue">perspective</span><br></br> pour une meilleure{" "}
            <span className="bmes-blue">construction</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

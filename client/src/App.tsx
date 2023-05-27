import "./_dist/App.css";
import ButtonBmes from "./components/button/ButtonBmes";
import NavbarBmes from "./components/navbar/NavbarBmes";

function App() {
  return (
    <div className="App">

      <NavbarBmes/>
      <div><ButtonBmes>click</ButtonBmes>
      <ButtonBmes variant="tertiary">click</ButtonBmes>
      <ButtonBmes variant="secondary">click</ButtonBmes>
      <ButtonBmes variant="warning">click</ButtonBmes></div>
      
    </div>
  );
}

export default App;

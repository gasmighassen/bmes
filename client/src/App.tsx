import "./_dist/App.css";
import ButtonBmes from "./components/button/ButtonBmes";

function App() {
  return (
    <div className="App">
      <ButtonBmes>click</ButtonBmes>
      <ButtonBmes variant="tertiary">click</ButtonBmes>
      <ButtonBmes variant="secondary">click</ButtonBmes>
      <ButtonBmes variant="warning">click</ButtonBmes>
    </div>
  );
}

export default App;

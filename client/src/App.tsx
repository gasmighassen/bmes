import { Route, Routes } from "react-router-dom";
import "./_dist/App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import Layout from "./components/layout/Layout";
import Service from "./pages/service/Service";
import About from "./pages/about/About";
import ContactUs from "./pages/contactUs/ContactUs";

function App() {
  return (
    <div className="App">
     <Routes >
        <Route path="/" element={<Layout/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="services" element={<Service/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<ContactUs/>}/>
        </Route>
     </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./_dist/App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import Layout from "./components/layout/Layout";
import Service from "./pages/service/Service";
import About from "./pages/about/About";
import ContactUs from "./pages/contactUs/ContactUs";
import ServiceLayout from "./components/layout/ServiceLayout";
import Portfolio from "./pages/portfolio/Portfolio";
import Devis from "./pages/devis/Devis";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import BmesAccess from "./pages/IAM/BmesAccess";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="services" element={<ServiceLayout />}>
            <Route index element={<Service />} />
          </Route>
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="devis" element={<Devis />} />
          <Route path="login" element={<BmesAccess />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

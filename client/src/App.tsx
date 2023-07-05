import { Outlet, Route, Routes } from "react-router-dom";
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
import UserPrivateRoute from "./private/UserPrivateRoute";
import Profile from "./pages/profile/Profile";
import AuthRoute from "./private/AuthRoute";
import PortfolioImgCard from "./pages/portfolio/PortfolioImgCard";
import PortfolioSharedLayout from "./pages/portfolio/PortfolioSharedLayout";

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
          <Route element={<PortfolioSharedLayout />}>
            <Route index path=":service" element={<PortfolioImgCard />} />
          </Route>

          <Route path="devis" element={<Devis />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          <Route element={<AuthRoute />}>
            <Route path="login" element={<Login />} />{" "}
            <Route path="register" element={<Register />} />{" "}
          </Route>

          <Route element={<UserPrivateRoute />}>
            <Route path="profile" element={<Profile />} />{" "}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

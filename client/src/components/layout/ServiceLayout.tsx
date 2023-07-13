import { Outlet } from "react-router-dom";
import "../../_dist/App.css";

import ServiceSidebar from "../ServiceSidebar/ServiceSidebar";
import Divider from "../divider/Divider";


type Props = {};

const ServiceLayout = (props: Props) => {
  return (
    <div className="bmes_service_outlet">
      <ServiceSidebar />
      <Divider type="Vertical" className="service__layout_divider" />
      <Outlet />
    </div>
  );
};

export default ServiceLayout;

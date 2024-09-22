import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuemSomos from "../pages/QuemSomos";
import Contato from "../pages/contato";
import Home from "../pages/home";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RouteApp;

import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuemSomos from "../pages/QuemSomos";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/quem-somos" element={<QuemSomos />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RouteApp;

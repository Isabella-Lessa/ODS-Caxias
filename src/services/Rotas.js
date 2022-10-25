import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../services/Header/index";
import About from "./../pages/About/index";
import ODS from "./../pages/ODS/index";
import Error from "../services/Error/index";

export default function Rotas() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/ods" element={<ODS />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

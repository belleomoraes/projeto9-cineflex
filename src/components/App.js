import { BrowserRouter, Routes, Route } from "react-router-dom";
import FinalScreen from "./FinalScreen";
import HourScreen from "./HourScreen";
import MainScreen from "./MainScreen";
import SeatScreen from "./SeatScreen";
import Head from "./Head";
import "./style.css";
import "./reset.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/sessoes/:idFilme" element={<HourScreen />} />
          <Route path="/assentos/:idSessao" element={<SeatScreen />} />
          <Route path="/sucesso" element={<FinalScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

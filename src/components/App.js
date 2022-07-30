import { BrowserRouter, Routes, Route } from "react-router-dom";
import FinalScreen from "./FinalScreen";
import HourScreen from "./HourScreen";
import MainScreen from "./MainScreen";
import SeatScreen from "./SeatScreen";
import Head from "./Head";
import "./style.css";
import "./reset.css";

export default function App() {
    const infosSaved = {
        movieName: "",
        date: "",
        hour: "",
        seats: [],
        name: "",
        cpf: ""
    }
  return (
    <>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/sessoes/:idFilme" element={<HourScreen infoSaved = {infosSaved}/>} />
          <Route path="/assentos/:idSessao" element={<SeatScreen />} />
          <Route path="/sucesso" element={<FinalScreen infoSaved = {infosSaved}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

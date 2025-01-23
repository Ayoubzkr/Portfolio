import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";  // Importer Home
import ATMProjectDetails from "./components/projects/ATMProjectDetails";  // Exemple de route pour un projet
import CabinetDetails from "./components/projects/CabinetDetails";
import OpticianDetails from "./components/projects/OpticianDetails";
import EducationDetails from "./components/projects/EducationDetails";
import JoueDetails from "./components/projects/JoueDetails";
import NewsDetails from "./components/projects/NewsDetails";
import { ReactLenis, useLenis } from 'lenis/react'
import ScrollToAnchor from './components/ScrollToAnchor';
import { HashRouter as Router } from 'react-router-dom';
import ConvertTextToSql from "./components/projects/ConvertTextToSql";
import WhatsAppIcon from "./components/WhatsAppIcon";

const App = () => {
  return (
    /*<ReactLenis root>*/
    <BrowserRouter >
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Route vers la page d'accueil */}
          <Route path="/projects/atm-management" element={<ATMProjectDetails />} />
          <Route path="/projects/dental-cabinet-management" element={<CabinetDetails/>} />
          <Route path="/projects/optician-management" element={<OpticianDetails/>} />
          <Route path="/projects/educational-task-management" element={<EducationDetails />} />
          <Route path="/projects/tic-tac-toe-game" element={<JoueDetails />} />
          <Route path="/projects/news-updates" element={<NewsDetails />} />
          <Route path="/projects/convert-text-to-sql" element={<ConvertTextToSql />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppIcon/>
    </BrowserRouter>
    /*</ReactLenis>*/
  );
}

export default App;

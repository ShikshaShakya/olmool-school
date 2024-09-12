import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ExecutiveBoard from "./components/ExecutiveBoard";
import MoreAbout from "./components/MoreAbout";
import Events from "./components/Events";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import ScrollToTop from "./components/ScrollToTop";
import Approach from "./components/Approach";
import AssociatePartners from "./components/AssociatePartners";
import EventCalendar from "./components/EventCalendar";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<ExecutiveBoard />} />
        <Route path="/moreabout" element={<MoreAbout />} />
        <Route path="/events" element={<Events />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/values" element={<Approach />} />
        <Route path="/partners" element={<AssociatePartners />} />
        <Route path="/calendar" element={<EventCalendar />} />
      </Routes>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </Router>
  );
}

export default App;

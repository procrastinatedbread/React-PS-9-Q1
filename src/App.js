import "./styles.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import InboxPage from "./components/InboxPage";
import SentPage from "./components/SentPage";
import IndividualEmailPage from "./components/IndividualEmailPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/sent" element={<SentPage />} />
        <Route path="/email/:type/:emailId" element={<IndividualEmailPage />} />
      </Routes>
    </div>
  );
}

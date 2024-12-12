import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TeamPage from "./pages/TeamPage";
import MemberPage from "./pages/MemberPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team/:domainId" element={<MemberPage />} />
      </Routes>
    </Router>
  );
};

export default App;

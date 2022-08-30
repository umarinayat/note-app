import { Routes, Route, Link } from "react-router-dom";

import Notes from "./pages/Notes";
import NewNotes from "./pages/NewNotes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create-new" element={<NewNotes />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

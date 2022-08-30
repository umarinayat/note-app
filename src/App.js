import Notes from "./pages/Notes";
import NewNotes from "./pages/NewNotes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Notes />
      <NewNotes />
      <Footer />
    </div>
  );
};

export default App;

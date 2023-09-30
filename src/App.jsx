import { Route, Routes } from "react-router-dom";
import DropNav from "./components/DropNav/DropNav";
import BuiokiSingle from "./components/BuiokiSingle/BuiokiSingle";
import './App.scss'
import Navbar from "./components/navbar/Navbar";
import Main from "./pages/main/Main";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import ContactUs from "./pages/contact/ContactUs";
import FishForum from "./FishForum/FishForum";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="site">
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route path="/FishForum" element={<FishForum />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="buiokebi/:id" element={<BuiokiSingle />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

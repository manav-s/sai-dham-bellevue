import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import Home from "./components/home/Home.tsx";
import PageNotFound from './components/PageNotFound.tsx';
import { Navbar } from "./components/nav/navbar";
import SaiBaba from "./components/sai-baba.tsx";
import AboutUs from "./components/AboutUs.tsx";
import Guruji from './components/guruji.tsx';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/sai-baba" element={<SaiBaba />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/guruji" element={<Guruji />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
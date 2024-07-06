import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import Home from "./components/home/Home.tsx";
import Header from "./components/Header.tsx";
import PageNotFound from './components/PageNotFound.tsx';
import { Navbar } from "./components/nav/navbar";
import AboutUs from "./components/AboutUs.tsx";


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* <Header/> */}
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="*" element={<PageNotFound />} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
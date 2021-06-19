import { React, useState } from "react";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import "./App.scss";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

function App() {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import WhatsAppButton from "./components/WhatsAppButton";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";


function App() {

  const [selectedPackage, setSelectedPackage] = useState("");


  return (
    <>
      <Navbar />

      <section id="home" className="hero">
        <div className="hero-content">

          <h1>
            Grow Your Brand
            <br />
            With Hadi Media
          </h1>

          <p>
            We create powerful strategies, creative content,
            and digital solutions that help businesses grow.
          </p>

        </div>
      </section>


      <About />

      <Services />

      <Packages setSelectedPackage={setSelectedPackage} />

      <Contact selectedPackage={selectedPackage} />
      <WhatsAppButton />

      <Footer />

    </>
  );
}

export default App;
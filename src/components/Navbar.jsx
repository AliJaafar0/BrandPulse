import logo from "../assets/logo.png.jpeg";


function Navbar() {

  return (

    <nav className="navbar">

      <img 
        src={logo}
        className="logo"
        alt="Hadi Media Logo"
      />


      <div className="links">

        <a href="#home">
          Home
        </a>

        <a href="#services">
          Services
        </a>

        <a href="#packages">
          Packages
        </a>

        <a href="#contact">
          Contact
        </a>

      </div>


      <a href="#contact">
        <button>
          Get Started
        </button>
      </a>


    </nav>

  );

}


export default Navbar;
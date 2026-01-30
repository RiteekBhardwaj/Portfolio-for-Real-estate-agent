import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Listings from "./components/Listings";
import Navbar from "./components/Navbar";
import ShortIntro from "./components/ShortIntro";
import Testimonials from "./components/Testimonials";
import WhyMe from "./components/WhyMe";

function App() {
  const clientsData = {
    firstName: "RITEEK",
    lastName: "BHARDWAJ",
    introText:
      "Hello I'm a real estate agent with 20 years of experience in the Haryana market. Whether buying or selling, I’m dedicated to guiding you through every step with passion and precision. Your goals are my mission, and your success is my ultimate reward.",
  };
  return (
    <div id="Home" className="App">
      <nav className="App-nav">
        <div>
          <Navbar />
        </div>
      </nav>
      <header className="App-header">
        <div>
          <ShortIntro
            firstName={clientsData.firstName}
            lastName={clientsData.lastName}
            introText={clientsData.introText}
          />
        </div>
      </header>
      <div id="Buy" className="App-listings">
        <div>
          <Listings />
        </div>
      </div>
      <div className="App-testimonials">
        <div>
          <Testimonials />
        </div>
      </div>
      <div className="App-whyme">
        <div>
          <WhyMe />
        </div>
      </div>
      <div id="About" className="App-about">
        <div>
          <About />
        </div>
      </div>
      <div id="Contact" className="App-contact">
        <div id="Sell">
          <Contact />
        </div>
      </div>
      <div className="App-faq">
        <div>
          <FAQ />
        </div>
      </div>
      <footer className="App-footer">
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;

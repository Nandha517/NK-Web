import Navbar from "./components/Navbar";
import MarketTicker from "./components/MarketTicker";
import SocialSidebar from "./components/SocialSidebar";
import Footer from "./components/Footer";

import AIBackground from "./components/AIBackground";
import LiveClock from "./components/LiveClock";
import ScrollProgress from "./components/ScrollProgress";
import ThemeToggle from "./components/ThemeToggle";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Projects from "./sections/Projects";
import Research from "./sections/Research";
import Blog from "./sections/Blog";
import Gallery from "./sections/Gallery";
import Resume from "./sections/Resume";
import RecruiterCTA from "./sections/RecruiterCTA";
import Contact from "./sections/Contact";

function App(){

  return(

    <>

      <ScrollProgress />

      <AIBackground />

      <Navbar />

      <MarketTicker />

      <SocialSidebar />

      <ThemeToggle />

      <LiveClock />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Education />

      <Certifications />

      <Projects />

      <Research />

      <Blog />

      <Gallery />

      <Resume />

      <RecruiterCTA />

      <Contact />

      <Footer />

    </>

  );

}

export default App;
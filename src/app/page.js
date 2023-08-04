import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Status from "./Components/Status";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Status />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

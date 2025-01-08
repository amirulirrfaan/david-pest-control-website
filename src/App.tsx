import { HelmetProvider } from "react-helmet-async";
import { Contact } from "./components/Contact";
import { Coverage } from "./components/Coverage";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { PestTypes } from "./components/PestTypes";
import { Process } from "./components/Process";
import { SEO } from "./components/SEO";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { WhyChooseUs } from "./components/WhyChooseUs";

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEO />
        <Header />
        <Navigation />
        <main>
          <Hero />
          <Services />
          <Stats />
          <Process />
          <WhyChooseUs />
          <Gallery />
          <Testimonials />
          <Coverage />
          <PestTypes />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;

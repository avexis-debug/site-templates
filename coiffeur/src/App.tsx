import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import siteData from "./config/siteData.json";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = `${siteData.name} - ${siteData.category} a ${siteData.city}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", siteData.metaDescription);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = siteData.metaDescription;
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

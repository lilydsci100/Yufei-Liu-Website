import React from "react";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Work from "./sections/Work.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Connect from "./sections/Connect.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import Project from "./sections/Project.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Work />
      <Project />
      <Faq />
      <Connect />
      <Footer />
    </main>
  );
};
export default App;

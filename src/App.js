import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BackgroundElements from "./components/BackgroundElements";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      <BackgroundElements />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;

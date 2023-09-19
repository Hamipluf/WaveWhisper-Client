import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import NavBar from "./components/layout/NavBar";
import Onboard from "./pages/Onboard";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <>
      <Sidebar />
      <NavBar />
      <Onboard />
      <Footer />
    </>
  );
}

export default App;

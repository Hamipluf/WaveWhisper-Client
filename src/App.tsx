import { useQuery } from "react-query";
// Helpers
import { fetchCurrentData } from "./utils/fetchCurrentData";
// Pages
import Home from "./pages/Home";
import Onboard from "./pages/Onboard";
// layout
import Sidebar from "./components/layout/Sidebar";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
// Assets
import Logo from "./assets/logo_transparent.png";
// Interfaces
import { dataCurrent } from "./utils/interfaces";
function App() {
  const {
    data,
    isLoading,
    isError,
  }: { data: dataCurrent | undefined; isLoading: boolean; isError: any } =
    useQuery("currentUser", fetchCurrentData);

  if (isLoading) {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <span className="loading loading-ring loading-lg mx-4"></span>
            <span className="loading loading-ring loading-lg mx-4"></span>
            <span className="loading loading-ring loading-lg mx-4"></span>

            <img src={Logo} alt="Logo de WaveWhisper" />
            <span className="loading loading-ring loading-lg mx-4"></span>
            <span className="loading loading-ring loading-lg mx-4"></span>
            <span className="loading loading-ring loading-lg mx-4"></span>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error al cargar los datos.</div>;
  }
  return (
    <>
      <Sidebar>
        <NavBar />
        <div className="hero">{data ? <Home /> : <Onboard />}</div>
        <Footer />
      </Sidebar>
    </>
  );
}

export default App;

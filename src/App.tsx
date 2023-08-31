import "./App.scss";
import CustomRouter from "../components/CustomRouter";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <CustomRouter />
      <Footer />
    </>
  )
}

export default App

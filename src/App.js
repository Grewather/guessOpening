import "./App.css";
import Navbar from "./components/layout/Navbar";
import { Route, Routes } from "react-router-dom";
import CreditsPage from "./pages/Credits";
import MainPage from "./pages/MainPage";
import QuizPage from "./pages/QuizPage";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/credits" element={<CreditsPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav";
import About from "./pages/About";
import AnotherPage from "./pages/AnotherPage";
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AnotherPage" element={<AnotherPage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;

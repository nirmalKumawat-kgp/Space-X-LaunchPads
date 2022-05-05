import { BrowserRouter, Route, Routes } from "react-router-dom";
import LaunchPads from "./pages/LaunchPads";
import Launch from "./pages/Launch";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LaunchPads />} />
        <Route path="/launch/:id" element={<Launch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QrGenerator from "./QrGenerator/QrGenerator";
import QrScanner from "./QrScanner/QrScanner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QrGenerator />} />
          <Route path="/scanner" element={<QrScanner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

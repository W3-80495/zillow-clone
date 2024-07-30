import Buy from "./Pages/Buy";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeAreWorking from "./Pages/WeAreWorking";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/buy-home" element={<Buy />} />
          <Route path="/under-construction" element={<WeAreWorking />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

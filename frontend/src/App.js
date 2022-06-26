import NavigationBar from "./components/AppBar/navigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login } from "./pages";
import Board from "./pages/Board/Board";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

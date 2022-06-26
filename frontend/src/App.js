import NavigationBar from "./components/AppBar/navigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login } from "./pages";
import Board from "./pages/Board/Board";
import NewMenu from "./pages/NewMenu/NewMenu";
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/board" element={<Board />} />
          <Route path="newMenu" element={<NewMenu />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

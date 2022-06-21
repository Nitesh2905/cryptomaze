import "./App.css";
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/Homepage";
import CoinPage from "./component/CoinPage";
import { makeStyles } from "@material-ui/core";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import "./assets/styles/main.scss";
import MainPage from "./components/pages/MainPage";
import CardListPage from "./components/pages/CardListPage";
import CardPage from "./components/pages/CardPage";
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cards" element={<CardListPage />} />
            <Route path="/card/:id" element={<CardPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

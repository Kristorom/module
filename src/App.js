import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import "./App.css";
const App = () => {
  const user = {
    name: "Khrystyna",
    surname: "Stadnyk",
    city: "Uzhhorod",
    group: "IST",
    hobby: "Programming",
  };

  return (
    <Router>
      <Header
        name={user.name}
        surname={user.surname}
        city={user.city}
        group={user.group}
      />
      <nav>
        <ul>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
          <li>
            <Link to="/page2">Page 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/page1" element={<Page1 city={user.city} />} />
        <Route path="/page2" element={<Page2 hobby={user.hobby} />} />
      </Routes>
      <Footer group={user.group} />
    </Router>
  );
};

export default App;

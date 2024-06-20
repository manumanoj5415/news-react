import React from "react";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar"; // Adjust the path as necessary
import Home from "./Pages/Home"; // Example component
import FetchData from "./Components/FetchData";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Business" element={<FetchData cat="Business" />} />
        <Route exact path="/Category" element={<FetchData cat="Category" />} />
        <Route
          exact
          path="/Entertainment"
          element={<FetchData cat="Entertainment" />}
        />
        <Route exact path="/Helath" element={<FetchData cat="Helath" />} />
        <Route exact path="/Science" element={<FetchData cat="Science" />} />
        <Route exact path="/Sports" element={<FetchData cat="Sports" />} />
        <Route
          exact
          path="/Technology"
          element={<FetchData cat="Technology" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

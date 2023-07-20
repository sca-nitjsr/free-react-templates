import React from "react";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Contributors from "./components/Contributors/Contributors";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Container />} />
                <Route exact path="/contributors" element={<Contributors />} />
            </Routes>
            <Footer />
        </Router>
    )
};

export default App;
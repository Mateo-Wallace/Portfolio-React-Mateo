import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Import Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Import Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#149be6",
        dark: "#0d579b",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;

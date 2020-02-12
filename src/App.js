import React from "react";
import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactMe from "./components/ContactMe";
function App() {
  return (
    <div className="App">
      <Header />
      <ContactMe></ContactMe>
      <Info />
    </div>
  );
}

export default App;

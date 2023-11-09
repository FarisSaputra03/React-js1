import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  // const navHeading = "Navigation Bar";
  // const navText = "Sosmed";

  // const clicked = () => {
  //   return alert("button di pencet");
  // };

  // const paragraf = () => {
  //   return (
  //     <div>
  //       <h3>mantap bang</h3>
  //       <i>horeeee</i>
  //       <marquee>jos gandos</marquee>
  //     </div>
  //   );
  // };

const [getNavbarValue, setNavbarValue] = useState("");

  const changeNavbarValue = () => {
    setNavbarValue("My Contact");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header navValue={getNavbarValue} />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ini Hompage</h1>
        <button onClick={() => changeNavbarValue()}>Ubah Navigasi</button>
      </header>
    </div>
  );
};

export default App;

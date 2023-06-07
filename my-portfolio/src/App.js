import logo from './logo.svg';
import './App.css';
import React from "react";
import About from "./components/About"
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  name = "Evan"
  return (
    <main text-gray-400 bg-gray-900 body-font>
      <Navbar/>
      <About name={name}/>
      <Projects/>
    </main>
  );
}

export default App;

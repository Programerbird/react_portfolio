import './App.css'
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home.js'
import Skills from './components/Skills.js'
import Project from './components/Project.js';
import Contact from './components/Contact.js'
import About from './components/About.js'

function App() {
  return (
    <div className="app">
    <Header/>
    <Home/>
    <About />
    <Skills />
    <Project />
    <Contact />
  </div>
  )
}

export default App

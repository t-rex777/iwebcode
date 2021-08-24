import About from "../components/About";
import Blog from "../components/Blog";
import Client from "../components/Client";
import Content from "../components/Content";
import Hello from "../components/Hello";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useState } from "react";
import ProjectPage from "../components/ProjectPage";

function App() {
  const route = window.location.pathname;
  return (
    <div className="App">
      {route === "/" && (
        <>
          <Nav />
          <Hero />
          <Projects />
          <Content />
          <About />
          <Client />
          <Hello />
          <Blog />
          <NewsLetter />
          <Footer />
        </>
      )}
      {route === "/project" && (
        <>
          <Nav />
          <ProjectPage />
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;

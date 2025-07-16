'use client'
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
    <NavBar />
    <Header />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer/>
    </>
  );
}

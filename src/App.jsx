import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GithubProjects from "./components/GithubProjects";
import GithubCard from "./components/GithubCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader"; // ✅ Added

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="github"><GithubProjects /></section>
        <section id="github-stats"><GithubCard /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

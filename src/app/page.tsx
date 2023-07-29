import About from "./components/about/page";
import Footer from "./components/footer/page";
import Contact from "./components/form/page";
import Landing from "./components/landing/page";
import NavBar from "./components/navbar/page";
import Project from "./components/project/page";
import Skills from "./components/skills/page";

export default function Home() {
  return (
    <>
      <main className="min-h-screen  bg-[#0F212E] text-white">
        <NavBar />
        <Landing />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

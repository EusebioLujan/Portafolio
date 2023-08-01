import About from "./components/about/page";
import Footer from "./components/footer/page";
import Contact from "./components/form/page";
import Landing from "./components/landing/page";
import NavBar from "./components/navbar/page";
import Project from "./components/project/page";
import Skills from "./components/skills/page";
import SocialMedia from "./components/social-media/page";
import Prueba from "./components/utils/prueba";
export default function Home() {
  return (
    <>
      <main className="min-h-screen scroll-pt-36 text-white">
        <div className="z-0">
        <Prueba /></div>
        <div className="z-40">
        <NavBar />
        <Landing />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
        <SocialMedia /></div>
      </main>
    </>
  );
}

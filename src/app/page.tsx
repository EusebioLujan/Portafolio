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
        <Prueba />
        <NavBar />
        <div className="relative z-20 md:static">
          <Landing />
          <About />
          <Skills />
          <Project />
          <Contact />
        </div>
        <div className="relative z-20 md:static">
          <SocialMedia />
        </div>
        <Footer />
      </main>
    </>
  );
}

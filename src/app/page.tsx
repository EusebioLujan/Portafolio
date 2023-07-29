import { FaGithub, FaWhatsapp } from 'react-icons/fa';
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
        <div className="fixed bottom-4 right-4 flex items-center">
          <a
            href="https://github.com/EusebioLujan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-4 hover:text-textcolorv hover:scale-110"
          >
            <FaGithub size={50} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=099249289"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-textcolorv hover:scale-110"
          >
            <FaWhatsapp size={55} />
          </a>
        </div>
      </main>
    </>
  );
}

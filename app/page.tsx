import Nav from "./components/Nav";
import About from "./components/About";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import MyPhoto from "@/public/images/IMG-20221119-WA0016.jpg";

export default function Home() {
  return (
    <main>
      <Nav />
      <div
        className="hero min-h-screen"
        style={{
        backgroundImage: `url(${MyPhoto.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        objectFit: "cover",
        backgroundColor: "#000"
      }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content w-auto text-neutral-content text-center">
      <div className="max-w-md mr-40">
        <p>Hello there, My name is</p>
        <h1 className="mb-5 text-5xl font-bold"><span className="animate-fade-in">Boikano</span> <span className="text-blue-600 animate-pulse">Success</span> 
        <span className="animate-fade-in"> Ranape</span></h1>

        <button className="btn btn-success"><a href="/MonCVMeilleur.pdf" download="Boikano-Success-Ranape-cv.pdf">Download CV</a></button>
      </div>
    </div>
  </div>
  <About />
  <Tools />
  <Projects />
  <Contact />
  </main>
  )
}

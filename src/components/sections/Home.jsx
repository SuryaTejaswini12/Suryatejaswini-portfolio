import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent leading-right">
            Hi, I'm Suryatejaswini
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm a CSE '25 undergraduate from GVPCE with hands-on experience in building real-world web applications and a strong interest in software development. 
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-purple-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-purple-700/70 text-purple-700 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-purple-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

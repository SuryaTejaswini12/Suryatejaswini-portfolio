import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Crypto Canvas</h3>
              <p className="text-gray-400 mb-4">
                Crypto currency price tracking website usingReact.js, integrating CoinGeckoAPI for real-time cryptocurrency data, including prices and market caps.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Coingecko API", "Chart.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-600 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://crypto-canvas-live.vercel.app/"
                  className="text-purple-600 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
              <p className="text-gray-400 mb-4">
                Responsive and minimalist portfolio to showcase skills, experience and projects using React and features of TailwindCSS for smooth transitions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["TailwindCSS", "React", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-purple-600 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-purple-600 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            
            
            

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Talkwave</h3>
              <p className="text-gray-400 mb-4">
                 Dynamic chat application using React and JavaScript, featuring live messaging, user presence, other functionalities and an interactive UI for seamless communication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "React", "JWT"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-purple-600 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/SuryaTejaswini12/TalkWave"
                  className="text-purple-600 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Face Trace</h3>
              <p className="text-gray-400 mb-4">
                Interactive face detection and tracking from webcam and video files with optimized performance by converting video frames to grayscale and key based termination.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "OpenCV", "Numpy", "HaarCascade"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-purple-600 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/SuryaTejaswini12/Face-Detection-"
                  className="text-purple-600 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const allSkills = [
  "JavaScript", "Java", "Python", "C++", "HTML", "CSS", "Node.js",
  "React.js", "OOPS", "NumPy", "Matplotlib",
  "Git", "GitHub", "VS Code", "PyCharm"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm passionate about leveraging technologies to create meaningful and efficient solutions. I've actively built projects with techstack that includes React, Nodejs, JavaScript, Python, APIs and programming languages - C++, Java. I'm eager to learn, explore new frameworks and libraries, while growing through collaboration, experimentation, and continuous improvement.
            </p>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((tech, key) => (
                  <span
                    key={key}
                      className="bg-purple-500/10 text-purple-600 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(139,92,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-8">
              <h3 className="text-xl font-bold mb-4"> {"  "}🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Computer Science </strong> - Gayatri Vidya Parishad College Of Engineering (A)  
                  <br/><span className="ml-5">(2021–2025)</span>
                </li>
                <li>
                  <strong> CGPA </strong> - 8.74
                </li>
                <li>
                  <strong>Relevant Coursework</strong> - Data Structures & Algorithms, Database management systems, Computer Networks, Operating systems
                </li>
              </ul>
            </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};

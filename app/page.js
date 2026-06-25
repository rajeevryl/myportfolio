export default function Portfolio() {
  const skills = [
    "HTML",
    "CSS",
    "Python",
    "C",
    "AI Tools",
  ];

  const certifications = [
  {
    title: "Research Methodologies and IPR",
    issuer: "VTU",
    image:
      "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    link: "https://online.vtu.ac.in/v1/course-exam-certificate/6407a871-6c4c-4b98-a4f5-4aac63445efd",
  },

  {
    title: "Full Stack Development",
    issuer: "Udemy",
    image:
      "https://cdn-icons-png.flaticon.com/512/5968/5968389.png",
    link: "https://udemy.com",
  },

  {
    title: "Machine Learning",
    issuer: "Coursera",
    image:
      "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    link: "https://coursera.org",
  },
];

  const projects = [
  {
    title: "AI Virtual Mouse",
    description:
      "Control computer mouse using hand gestures with OpenCV and Python.",
    github: "https://github.com/rajeevryl/aivirtualmouse",
    image:
      "https://cdn-icons-png.flaticon.com/512/906/906324.png",
  },

  {
    title: "News CMS Website",
    description:
      "Modern news publishing platform with admin dashboard and authentication.",
    github: "https://github.com/rajeevryl/pulsenews",
    image:
      "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
  },

  {
    title: "IMDB Sentiment Analysis",
    description:
      "Machine learning project to predict movie review sentiments.",
    github: "https://github.com/rajeevryl",
    image:
      "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
  },
];

  return (
    <div className="min-h-screen bg-[#212121] text-white overflow-x-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#AEFF46]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#AEFF46]/10 blur-3xl rounded-full"></div>

      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-[#212121]/80 border-b border-[#AEFF46]/20 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#AEFF46] tracking-wide">
          Portfolio
        </h1>

        <div className="flex gap-6 text-sm md:text-base">
          <a href="#about" className="hover:text-[#AEFF46] transition-all duration-300">About</a>
          <a href="#skills" className="hover:text-[#AEFF46] transition-all duration-300">Skills</a>
          <a href="#projects" className="hover:text-[#AEFF46] transition-all duration-300">Projects</a>
          <a href="#certifications" className="hover:text-[#AEFF46] transition-all duration-300">Certifications</a>
        </div>
      </nav>

      <section
        id="about"
        className="relative flex flex-col items-center justify-center text-center px-6 py-24"
      >
        <div className="group relative">
          <div className="absolute inset-0 rounded-full bg-[#AEFF46] blur-2xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

          <img
            src="profile.jpeg"
            alt="profile"
            className="relative w-40 h-40 rounded-full object-cover border-4 border-[#AEFF46] shadow-[0_0_30px_#AEFF46] hover:scale-105 transition duration-500"
          />
        </div>

        <h1 className="mt-8 text-4xl md:text-6xl font-bold tracking-wide">
          M RAJEEV RAYAL
        </h1>

        <p className="mt-4 text-gray-300 max-w-xl text-lg leading-relaxed">
          Passionate Developer • AI Enthusiast • Creative Thinker
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="https://www.linkedin.com/in/mrajeevrayal/"
            target="_blank"
            className="px-6 py-3 rounded-2xl bg-[#AEFF46] text-[#212121] font-semibold hover:scale-105 transition duration-300 shadow-[0_0_20px_#AEFF46]"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/rajeevryl"
            target="_blank"
            className="px-6 py-3 rounded-2xl border border-[#AEFF46] hover:bg-[#AEFF46] hover:text-[#212121] transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.instagram.com/rajeev__ai?igsh=dHE3NG1hcmVpOG9h"
            target="_blank"
            className="px-6 py-3 rounded-2xl border border-[#AEFF46] hover:bg-[#AEFF46] hover:text-[#212121] transition duration-300"
          >
            Instagram
          </a>
        </div>
      </section>

      <section id="skills" className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-[#AEFF46] mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] border border-[#AEFF46]/20 hover:border-[#AEFF46] rounded-2xl p-5 text-center hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-[0_0_20px_#AEFF46]"
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-[#AEFF46] mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#2A2A2A] rounded-3xl p-8 border border-[#AEFF46]/20 hover:border-[#AEFF46] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_#AEFF46] flex flex-col justify-between min-h-[320px]"
            >
             <div className="flex items-center gap-4 mb-6">
  <img
    src={project.image}
    alt={project.title}
    className="w-16 h-16 object-contain group-hover:scale-110 transition duration-500"
  />

  <h3 className="text-2xl font-semibold">
    {project.title}
  </h3>
</div>

<p className="text-gray-300 leading-relaxed mb-5">
  {project.description}
</p>
              <a
  href={project.github}
  target="_blank"
  className="inline-block mt-5 px-5 py-2 rounded-xl bg-[#AEFF46] text-[#212121] font-semibold hover:scale-105 transition duration-300"
>
  View Project
</a>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="px-6 md:px-20 py-16">
  <h2 className="text-3xl font-bold text-[#AEFF46] mb-10">
    Certifications
  </h2>

  <div className="grid md:grid-cols-2 gap-8">
    {certifications.map((cert, index) => (
      <div
        key={index}
        className="group bg-[#2A2A2A] rounded-3xl p-8 border border-[#AEFF46]/20 hover:border-[#AEFF46] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_#AEFF46]"
      >
        <div className="flex items-center gap-4 mb-6">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-14 h-14 object-contain group-hover:scale-110 transition duration-500"
          />

          <div>
            <h3 className="text-xl font-semibold">
              {cert.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {cert.issuer}
            </p>
          </div>
        </div>

        <a
          href={cert.link}
          target="_blank"
          className="inline-block mt-3 px-5 py-2 rounded-xl bg-[#AEFF46] text-[#212121] font-semibold hover:scale-105 transition duration-300"
        >
          View Certificate
        </a>
      </div>
    ))}
  </div>
</section>

      <footer className="border-t border-[#AEFF46]/20 py-8 text-center text-gray-400 text-sm">
        © 2026 My Portfolio • Designed by Rajeev Rayal
      </footer>
    </div>
  );
}

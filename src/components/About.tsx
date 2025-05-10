import myimaage from "../Assets/vithu1.jpeg";
const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="section-heading">About Me</h2>
          <div className="space-y-4 mt-4">
            <p className="text-lg">
              Hello! I'm Vasantharajah Vithusan, a dedicated Full Stack Developer based in Sri Lanka.
              I’m passionate about building efficient and scalable web applications that make a difference.
            </p>
            <p className="text-lg">
              My journey in software development started during my university studies, where I developed a strong interest 
              in creating interactive and practical digital solutions. Since then, I've worked on academic projects, event management systems, 
              carpooling platforms, and more.
            </p>
            <p className="text-lg">
              I specialize in building full-stack applications using Django, Spring Boot, PHP, and Next.js. 
              I’m also proficient in working with relational databases such as MySQL and PostgreSQL. 
              My focus is always on clean code, maintainability, and delivering user-friendly experiences.
            </p>
            <p className="text-lg">
              Outside of development, I enjoy exploring new technologies, contributing to open-source projects, 
              and continuously improving my software engineering skills.
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-brand-blue shadow-xl">
            <img 
            src={myimaage}
              alt="Vasantharajah Vithusan" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

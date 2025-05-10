
const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "PHP", "HTML/CSS"],
    },
    {
      category: "Frameworks/Libraries",
      skills: ["React", "Next.js", "Spring Boot", "Django", ".js"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL",],
    },
    {
      category: "Tools",
      skills: ["Git", "AWS", "VS Code", "Postman", "Figma"],
    },
    // {
    //   category: "Methodologies",
    //   skills: ["Agile", "Scrum", "TDD", "CI/CD", "RESTful APIs", "GraphQL"],
    // },
  ];

  return (
    <section id="skills" className="bg-muted/50 dark:bg-secondary/20">
      <div className="section-container">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 font-heading text-brand-blue">{category.category}</h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 font-heading">Core Competencies</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Frontend Development", level: 90 },
              { name: "Backend Development", level: 85 },
              { name: "Database Design", level: 80 },
              // { name: "DevOps", level: 70 },
              { name: "UI/UX Design", level: 75 },
              { name: "System Architecture", level: 80 },
            ].map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div 
                    className="bg-brand-blue h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

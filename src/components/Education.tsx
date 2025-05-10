import { BookOpen, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science (BSc) in Computer Science and Technology",
      institution: "Uva Wellassa University of Sri Lanka",
      dates: "Jun 2022 - Present",
      description: "Undergraduate student specializing in Computer Science and Technology with a strong foundation in software engineering and development.",
      achievements: [
        "Current CGPA: 3.57",
      ],
    },
    {
      degree: "GCE Advanced Level - Physical Science Stream",
      institution: "J/Chavakachcheri Hindu College, Sri Lanka",
      dates: "2017 - 2020",
      description: "Focused on Mathematics, Chemistry, and Physics during A/Ls.",
      achievements: [
        "Combined Mathematics - A",
        "Chemistry - C",
        "Physics - C",
      ],
    },
  ];

  return (
    <section id="education" className="bg-muted/50 dark:bg-secondary/20">
      <div className="section-container">
        <h2 className="section-heading">Education</h2>

        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-brand-blue bg-opacity-10 text-brand-blue">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-heading">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution} | {edu.dates}</p>
                </div>
              </div>

              <p className="mb-4">{edu.description}</p>

              {edu.achievements.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <Award size={18} className="text-brand-blue" />
                    Achievements
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="mt-16">
          <h2 className="section-heading">Languages</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                language: "English",
                proficiency: "Fluent",
                level: 95,
                flag: "🇺🇸"
              },
              {
                language: "Tamil",
                proficiency: "Native",
                level: 100,
                flag: "🇱🇰"
              },
              
            ].map((lang, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl" aria-hidden="true">{lang.flag}</span>
                  <div>
                    <h3 className="font-semibold">{lang.language}</h3>
                    <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-brand-blue h-2 rounded-full"
                    style={{ width: `${lang.level}%` }}
                    aria-label={`${lang.language} proficiency: ${lang.level}%`}
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

export default Education;

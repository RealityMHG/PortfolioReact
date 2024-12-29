import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/skills/java.svg",
    label: "Java",
  },
  {
    imgSrc: "/images/skills/html5.svg",
    label: "HTML",
  },
  {
    imgSrc: "/images/skills/css_old.svg",
    label: "CSS",
  },
  {
    imgSrc: "/images/skills/javascript.svg",
    label: "JavaScript",
  },
  {
    imgSrc: "/images/skills/typescript.svg",
    label: "TypeScript",
  },
  {
    imgSrc: "/images/skills/nodejs.svg",
    label: "NodeJS",
  },
  {
    imgSrc: "/images/skills/python.svg",
    label: "Python",
  },
  {
    imgSrc: "/images/skills/mongodb.svg",
    label: "MongoDB",
  },
  {
    imgSrc: "/images/skills/react.svg",
    label: "React",
  },
  {
    imgSrc: "/images/skills/tailwindcss.svg",
    label: "Tailwind CSS",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-3 reveal-up mb-8">Essential Tools I Use</h2>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
          {skillItem.map(({ label, imgSrc }) => (
            <SkillCard
              key={label}
              label={label}
              imgSrc={imgSrc}
              classes="reveal-up"
            ></SkillCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

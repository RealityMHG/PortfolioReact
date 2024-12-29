import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/projects/game_hub.jpg",
    title: "Gaming Hub",
    projectLink: "https://game-hub-rafael-regos-projects.vercel.app/",
    gitHubLink: "https://github.com/RealityMHG/game-hub",
  },
  {
    imgSrc: "/images/projects/pokedex.jpg",
    title: "PokeDex",
    projectLink: "https://realitymhg.github.io/pokemonApp/",
    gitHubLink: "https://github.com/RealityMHG/pokemonApp",
  },
  {
    imgSrc: "/images/projects/weatherApp.jpg",
    title: "Weather App",
    projectLink: "https://realitymhg.github.io/weatherApp/",
    gitHubLink: "https://github.com/RealityMHG/weatherApp",
  },
  {
    imgSrc: "/images/projects/musicPlayer.jpg",
    title: "Music Player",
    projectLink: "https://realitymhg.github.io/musicPlayer/",
    gitHubLink: "https://github.com/RealityMHG/musicPlayer",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Projects Highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, projectLink, gitHubLink }) => (
            <ProjectCard
              key={title}
              imgSrc={imgSrc}
              title={title}
              projectLink={projectLink}
              gitHubLink={gitHubLink}
              classes="reveal-up"
            ></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

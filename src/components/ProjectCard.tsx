import { socialLinks } from "./Contact";

interface ProjectCardProps {
  imgSrc: string;
  title: string;
  projectLink: string;
  gitHubLink: string;
  classes?: string;
}

const ProjectCard = ({
  imgSrc,
  title,
  projectLink,
  gitHubLink,
  classes,
}: ProjectCardProps) => {
  return (
    <div
      className={`relative p-4 rounded-2xl bg-light/50 shadow-sm shadow-stronger hover:bg-light hover:shadow-md hover:shadow-stronger active:bg-light/50 ring-1 ring-inset ring-strong/20 transition-all ${classes}`}
    >
      <figure className="img-box aspect-square rounded-lg mb-4 ">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex items-center justify-between ">
        <div>
          <h3 className="title-1 pl-2">{title}</h3>
        </div>
        <div className="flex gap-3">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open project: ${title}`}
          >
            <div className="w-11 h-11 rounded-lg grid place-items-center bg-stronger text-background shrink-0 ring-1 ring-inset ring-strong/80 shadow-sm shadow-stronger hover:bg-background hover:text-stronger hover:shadow-md hover:shadow-stronger transition-all">
              <span className="material-symbols-rounded" aria-hidden="true">
                arrow_outward
              </span>
            </div>
          </a>
          {socialLinks
            .filter(({ alt }) => alt === "GitHub")
            .map(({ icon }) => (
              <a href={gitHubLink} target="_blank" className="w-[100%]">
                <div className="w-11 h-11 rounded-lg grid place-items-center bg-stronger text-background shrink-0 ring-1 ring-inset ring-strong/80 shadow-sm shadow-stronger hover:bg-background hover:text-stronger hover:shadow-md hover:shadow-stronger transition-all">
                  <span>{icon}</span>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

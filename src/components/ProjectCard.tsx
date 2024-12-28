interface ProjectCardProps {
  imgSrc: string;
  title: string;
  projectLink: string;
  classes?: string;
}

const ProjectCard = ({
  imgSrc,
  title,
  projectLink,
  classes,
}: ProjectCardProps) => {
  return (
    <div
      className={`relative p-4 rounded-2xl bg-light/50 shadow-sm shadow-stronger hover:bg-light hover:shadow-md hover:shadow-stronger active:bg-light/50 ring-1 ring-inset ring-strong/20 transition-colors group ${classes}`}
    >
      <figure className="img-box aspect-square rounded-lg mb-4 ">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex items-center justify-between ">
        <div>
          <h3 className="title-1">{title}</h3>
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center bg-stronger text-background shrink-0 ring-1 ring-inset ring-strong/80 shadow-sm shadow-stronger group-hover:bg-background group-hover:text-stronger group-hover:shadow-md group-hover:shadow-stronger transition-colors">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>

      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
        aria-label={`Open project: ${title}`}
      ></a>
    </div>
  );
};

export default ProjectCard;

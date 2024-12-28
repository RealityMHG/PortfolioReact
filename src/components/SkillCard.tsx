interface SkillCardProps {
  imgSrc: string;
  label: string;
  classes?: string;
}

const SkillCard = ({ imgSrc, label, classes }: SkillCardProps) => {
  return (
    <div
      className={`flex items-center gap-3 ring-2 ring-inset ring-strong/20 rounded-2xl p-3 shadow-sm shadow-stronger hover:bg-light/50 hover:shadow-md hover:shadow-stronger transition-all group ${classes}`}
    >
      <figure className="bg-light/50 rounded-lg overflow-hidden w-12 h-12 p-2 justify-center shadow-sm shadow-stronger group-hover:bg-background group-hover:shadow-md group-hover:shadow-stronger transition-all">
        <img src={imgSrc} alt={label} className=" w-8 h-8" />
      </figure>
      <div>
        <h3>{label}</h3>
      </div>
    </div>
  );
};

export default SkillCard;

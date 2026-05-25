const aboutItems = [
  {
    label: 'Personal Projects Built',
    number: 20,
  },
  {
    label: 'Professional Projects Delivered',
    number: 2,
  },
  {
    label: 'Years of Programming',
    number: 6,
  },
  {
    label: 'Years of Professional Experience',
    number: 2,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-light/50 p-7 rounded-2xl shadow-sm shadow-stronger md:p-12 reveal-up">
          <p className="mb-4 md:mb-8 md:text-lg md:max-w-[60ch]">
            Full-Stack Developer focused on React, TypeScript, .NET/C#, and SQL. I build stable,
            consistent, and well-structured applications, with experience in front-end technical
            leadership and delivering high-quality solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }) => (
              <div key={label}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                </div>
                <p className="text-sm text-text/70">{label}</p>
              </div>
            ))}
            <img
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="ml-auto shadow-sm shadow-stronger md:w-[60px] md:h-[60px] rounded-lg"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

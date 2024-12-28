const aboutItems = [
  {
    label: "Projects done",
    number: 20,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-light/50 p-7 rounded-2xl shadow-sm shadow-stronger md:p-12 reveal-up">
          <p className="mb-4 md:mb-8 md:text-lg md:max-w-[60ch]">
            I have a passion for crafting smooth, intuitive digital experiences.
            From responsive front-end design to scalable back-end logic, I love
            tackling every part of the development journey. My toolkit includes
            several languages and frameworks and I'm always exploring new
            technologies to keep my work sharp and future-ready. I'm all about
            clean code, creative problem-solving, and making sure each project
            brings real value to users. Let's build something amazing together!
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }) => (
              <div key={label}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
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

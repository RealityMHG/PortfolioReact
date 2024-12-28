import Button from "./Button";

const Hero = () => {
  return (
    <section className="pt-64 lg:pt-16" id="home">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/profilepic.png"
                width={40}
                height={40}
                alt="Rafael portrait"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-strong text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-green">
                <span className="absolute inset-0 rounded-full bg-green animate-ping"></span>
              </span>
              Available for work!
            </div>
          </div>
          <h2 className="headline-1 typing-text max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Full Stack Developer
          </h2>
          <div className="flex items-center gap-3">
            <Button
              label="Download CV"
              icon="download"
              variant="primary"
            ></Button>
            <Button
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
              variant="outline"
            ></Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-strong via-25% via-strong/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/heroPic.png"
              width={656}
              height={800}
              alt="Rafael Rego"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Illlustration1 from "@assets/Spam-Illustration.svg";
import Illlustration2 from "@assets/Fixing-Bugs-Illustration.svg";
import AnimatedLink from "@components/ui/AnimatedLink";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#fdfbfb] to-[#ebedee]">
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center sm:px-0 sm:py-32 md:py-32">
        <h1 className="group font-display mb-4 cursor-pointer bg-linear-to-r from-neutral-950 to-neutral-900 bg-clip-text text-5xl leading-none font-bold tracking-tighter text-transparent md:text-6xl">
          Stop{" "}
          <span
            class="relative z-10 cursor-pointer px-2 leading-snug font-bold text-neutral-900 group-hover:text-neutral-800 after:pointer-events-none after:absolute after:bottom-0 after:left-0.5 after:z-[-1] after:h-full after:w-full after:origin-bottom after:rounded-xs after:bg-amber-300 after:transition-all after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] md:after:h-2 md:group-hover:after:h-full md:hover:after:h-full"
            tabindex="0"
          >
            Stressing
          </span>{" "}
          <br className="sm:hidden" />
          Over Your CV
        </h1>
        <p className="text-md mx-auto mb-8 max-w-xl leading-tight font-medium text-neutral-700 sm:text-lg md:text-xl">
          Let us handle the formatting while you focus{" "}
          <br className="sm:hidden" /> on your story. Ready in minutes, not
          hours.
        </p>
        <AnimatedLink to="create">Get Started</AnimatedLink>
      </div>

      <div className="pointer-events-none absolute -bottom-8 -left-6 z-0 hidden h-auto w-60 md:block lg:-left-10 lg:w-[310px] xl:w-[350px]">
        <img
          src={Illlustration1}
          alt="Decorative Illustration"
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="pointer-events-none absolute -right-6 -bottom-6 z-0 hidden h-auto w-60 md:block lg:-right-12 lg:-bottom-12 lg:w-[360px] xl:w-[400px]">
        <img
          src={Illlustration2}
          alt="Decorative Illustration"
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;

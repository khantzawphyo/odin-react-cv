import AnimatedLink from "./ui/AnimatedLink";
import CTAIllustration from "@assets/Get-Inspired-Illustration.svg";

const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden border-t border-neutral-200 bg-white px-6 py-24">
      <div className="max-w-xl text-center md:mr-auto md:max-w-2xl md:pl-10 md:text-left">
        <h1 className="font-display mb-4 cursor-pointer text-3xl tracking-tight text-neutral-900 sm:text-4xl">
          Ready to build your{" "}
          <span className="relative z-10 cursor-pointer px-2 font-bold text-neutral-900 after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-2 after:w-full after:origin-bottom after:rounded-xs after:bg-amber-300 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:h-full">
            perfect CV
          </span>
          ?
        </h1>
        <p className="mb-8 text-neutral-700 sm:text-lg">
          Start today and get your CV in minutes.
        </p>
        <AnimatedLink to="create">Get Started</AnimatedLink>
      </div>
      <div className="pointer-events-none absolute right-0 -bottom-3 hidden md:block">
        <img
          src={CTAIllustration}
          alt="Decorative Illustration"
          className="h-auto w-68 object-contain md:w-78"
        />
      </div>
    </section>
  );
};

export default CTA;

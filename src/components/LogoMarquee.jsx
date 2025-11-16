import Marquee from "react-fast-marquee";

import ViteLogo from "../assets/logos/vite.svg";
import ReactLogo from "../assets/logos/react.svg";
import ReactRouterLogo from "../assets/logos/reactrouter.svg";
import TailwindLogo from "../assets/logos/tailwindcss.svg";
import JavaScriptLogo from "../assets/logos/javascript.svg";
import ZustandLogo from "../assets/logos/zustand.svg";
import FontAwesomeLogo from "../assets/logos/fontawesome.svg";
import VSCodeLogo from "../assets/logos/vscode.svg";

const techStack = [
  { name: "Vite", src: ViteLogo },
  { name: "React", src: ReactLogo },
  { name: "React Router", src: ReactRouterLogo },
  { name: "Tailwind CSS", src: TailwindLogo },
  { name: "JavaScript", src: JavaScriptLogo },
  { name: "Zustand", src: ZustandLogo },
  { name: "FontAwesome", src: FontAwesomeLogo },
  { name: "VS Code", src: VSCodeLogo },
];

const LogoMarquee = () => {
  return (
    <section className="border-t border-neutral-200 bg-white py-6">
      <div className="mb-4 text-center md:mb-6">
        <h2 className="font-display text-sm font-medium tracking-widest text-neutral-600 uppercase md:text-base">
          Built using
        </h2>
      </div>
      <Marquee
        gradient={true}
        speed={40}
        loop={0}
        className="flex gap-6 md:gap-12"
        gradientColor="white"
      >
        {[...techStack, ...techStack].map((tech, idx) => (
          <div
            key={idx}
            className="relative mx-4 h-10 w-16 opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:mx-8 md:h-14 md:w-24 cursor-pointer"
            title={tech.name}
          >
            <img
              src={tech.src}
              alt={tech.name}
              draggable="false"
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default LogoMarquee;

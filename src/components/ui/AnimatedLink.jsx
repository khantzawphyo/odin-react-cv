import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AnimatedLink = ({ to, children, className = "" }) => {
  return (
    <Link
      to={to}
      className={`group relative inline-flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-neutral-950 px-6 font-medium text-neutral-200 transition-all duration-200 hover:scale-105 ${className}`}
    >
      <span>{children}</span>
      <div className="w-5 translate-x-0 pl-1 opacity-100 transition-all duration-200 md:w-0 md:translate-x-full md:pl-0 md:opacity-0 md:group-hover:w-5 md:group-hover:translate-x-0 md:group-hover:pl-1 md:group-hover:opacity-100">
        <FontAwesomeIcon icon={faArrowRight} size="sm" />
      </div>
      <div className="absolute inset-0 flex h-full w-full transform-[skew(-12deg)_translateX(-100%)] justify-center group-hover:transform-[skew(-12deg)_translateX(100%)] group-hover:duration-1000">
        <div className="relative h-full w-8 bg-white/20"></div>
      </div>
    </Link>
  );
};

export default AnimatedLink;

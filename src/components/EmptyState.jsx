import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faUser,
  faBriefcase,
  faGraduationCap,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const EmptyState = () => {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center p-8 text-center bg-white">
      <div className="mb-8">
        <FontAwesomeIcon
          icon={faFileAlt}
          className="text-5xl text-neutral-400" 
        />
      </div>

      <h3 className="mb-3 text-3xl font-semibold text-neutral-800">
        Start Building Your CV
      </h3>

      <p className="mb-8 max-w-lg text-base leading-relaxed text-neutral-600">
        Your professional curriculum vitae preview will appear here as you enter your details.
      </p>

      <div className="w-full max-w-sm">
        <h4 className="mb-4 text-left text-lg font-medium text-neutral-700">
          Essential Sections:
        </h4>
        <ul className="space-y-3 text-left">
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faUser} className="text-lg text-neutral-400" />
            <span className="text-base text-neutral-700 font-medium">Personal Information</span>
          </li>
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faBriefcase} className="text-lg text-neutral-400" />
            <span className="text-base text-neutral-700 font-medium">Work Experience</span>
          </li>
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faGraduationCap} className="text-lg text-neutral-400" />
            <span className="text-base text-neutral-700 font-medium">Education & Qualifications</span>
          </li>
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faTools} className="text-lg text-neutral-400" />
            <span className="text-base text-neutral-700 font-medium">Key Skills</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmptyState;
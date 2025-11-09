import {
  faClipboardList,
  faDownload,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const steps = [
  {
    step: 1,
    icon: faClipboardList,
    title: "Pick a Template",
    description:
      "Browse clean, professional templates and pick one that fits your style.",
  },
  {
    step: 2,
    icon: faPencil,
    title: "Fill Your Details",
    description:
      "Use our intuitive form to add your experience, education, and skills.",
  },
  {
    step: 3,
    icon: faDownload,
    title: "Download & Apply",
    description: "Export a polished, print-ready resume in just one click.",
  },
];

const HowItWorks = () => {
  return (
    <section id="features" className="bg-neutral-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl tracking-tight text-neutral-900 sm:text-4xl">
            How it{" "}
            <span className="relative z-10 cursor-pointer font-bold after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-full after:w-full after:origin-bottom-right after:scale-x-0 after:bg-amber-300 after:transition-transform after:duration-600 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:text-neutral-900 hover:after:origin-bottom-left hover:after:scale-x-100">
              Works
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-neutral-600">
            Create your CV in just a few minutes.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-4 rounded-xl bg-white px-6 py-12 text-center shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 text-white shadow-md">
                <FontAwesomeIcon icon={step.icon} size="lg" />
              </div>
              <h3 className="font-display text-xl font-semibold">
                {step.title}
              </h3>
              <p className="text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

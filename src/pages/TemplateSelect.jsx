import TemplateCard from "@components/TemplateCard";
import { useNavigate } from "react-router";
import React from "react";
import {
  faBriefcase,
  faLandmark,
  faMagicWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import useTemplateStore from "@stores/useTemplateStore";

const TEMPLATES = [
  {
    name: "Modern",
    desc: "Clean and contemporary professional design",
    icon: faBriefcase,
    accent: "bg-orange-500",
  },
  {
    name: "Creative",
    desc: "Bold and innovative style to stand out",
    icon: faMagicWandSparkles,
    accent: "bg-red-500",
  },
  {
    name: "Classic",
    desc: "Timeless and elegant layout",
    icon: faLandmark,
    accent: "bg-fuchsia-600",
  },
];

export default function TemplateSelect() {
  const navigate = useNavigate();
  const setTemplate = useTemplateStore((state) => state.setTemplate);

  const handleSelect = (templateName) => {
    setTemplate(templateName.toLowerCase());
    navigate("/editor");
  };

  return (
    <section className="container min-h-screen mx-auto px-6 py-16">
      <h1 className="font-display -mt-5 mb-2 text-center text-4xl font-bold text-neutral-800">
        Choose Your CV Template
      </h1>
      <p className="mb-8 text-center text-lg font-medium text-neutral-500">
        Pick a design that best represents your personality and profession.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {TEMPLATES.map((t) => (
          <TemplateCard key={t.name} template={t} onSelect={handleSelect} />
        ))}
      </div>
    </section>
  );
}

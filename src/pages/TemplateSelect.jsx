import TemplateCard from "@components/TemplateCard";
import { useNavigate } from "react-router";
import {
  faBriefcase,
  faLandmark,
  faMagicWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import useTemplateStore from "@stores/useTemplateStore";

export default function TemplateSelect() {
  const navigate = useNavigate();
  const setTemplate = useTemplateStore((state) => state.setTemplate);

  const handleSelect = (templateName) => {
    setTemplate(templateName.toLowerCase());
    navigate("/editor");
  };

  const templates = [
    {
      name: "Modern",
      desc: "Clean and contemporary professional design",
      icon: faBriefcase,
      accent: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
    {
      name: "Creative",
      desc: "Bold and innovative style to stand out",
      icon: faMagicWandSparkles,
      accent: "bg-gradient-to-br from-orange-500 to-red-600",
    },
    {
      name: "Classic",
      desc: "Bold and innovative style to stand out",
      icon: faLandmark,
      accent: "bg-gradient-to-br from-neutral-600 to-neutral-800",
    },
  ];

  return (
    <section className="container mx-auto min-h-dvh px-6 py-16">
      <h1 className="font-display mb-2 text-center text-4xl font-bold text-neutral-800">
        Choose Your CV Template
      </h1>
      <p className="mb-8 text-center text-lg font-medium text-neutral-500">
        Pick a design that best represents your personality and profession.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {templates.map((t) => (
          <TemplateCard key={t.name} template={t} onSelect={handleSelect} />
        ))}
      </div>
    </section>
  );
}

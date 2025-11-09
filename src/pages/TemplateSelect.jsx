import TemplateCard from "@components/TemplateCard";
import { useNavigate } from "react-router";
import {
  faFileAlt,
  faPalette,
  faBriefcase,
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
      desc: "Clean, professional, and optimized for readability.",
      icon: faBriefcase,
      accent: "bg-blue-500",
    },
    {
      name: "Creative",
      desc: "Stylish layout with vibrant highlights and design flair.",
      icon: faPalette,
      accent: "bg-pink-500",
    },
    {
      name: "Classic",
      desc: "Traditional layout that keeps things simple and elegant.",
      icon: faFileAlt,
      accent: "bg-green-500",
    },
  ];

  return (
    <section className="container min-h-dvh mx-auto px-6 py-16">
      <h1 className="font-display mb-4 text-center text-4xl font-bold text-neutral-800">
        Choose Your CV Template
    </h1>
      <p className="mb-12 text-center text-lg font-medium text-neutral-500">
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

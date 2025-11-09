import ModernTemplate from "./ModernTemplate";
import ClassicTemplate from "./ClassicTemplate";
import CreativeTemplate from "./CreativeTemplate";
import useTemplateStore from "@stores/useTemplateStore";

const CVTemplate = ({ cvData }) => {
  const selectedTemplate = useTemplateStore((state) => state.selectedTemplate);

  const templates = {
    modern: ModernTemplate,
    classic: ClassicTemplate,
    creative: CreativeTemplate,
  };

  const TemplateComponent = templates[selectedTemplate] || ModernTemplate;

  return <TemplateComponent cvData={cvData} />;
};

export default CVTemplate;

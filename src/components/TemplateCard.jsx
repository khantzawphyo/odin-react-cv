import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TemplateCard = ({ template, onSelect }) => {
  const { name, desc, icon, accent } = template;

  return (
    <div
      onClick={() => onSelect(name)}
      className="group relative mx-auto w-full max-w-sm min-w-[280px] cursor-pointer rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <div
        className={`mb-4 h-32 rounded-lg ${accent} flex items-center justify-center`}
      >
        <div className="text-center text-white">
          <FontAwesomeIcon icon={icon} size="3x" className="opacity-90" />
        </div>
      </div>

      <div className="text-center">
        <h3 className="font-display mb-2 text-xl font-semibold text-neutral-800">
          {name}
        </h3>

        <p className="mb-4 text-sm font-medium text-neutral-600">{desc}</p>

        <button
          className={`rounded-full px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-md ${accent}`}
        >
          Select {name}
        </button>
      </div>
      <div className="absolute inset-0 rounded-xl ring-2 ring-transparent transition-all duration-300 group-hover:ring-neutral-300" />
    </div>
  );
};

export default TemplateCard;

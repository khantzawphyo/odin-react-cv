import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TemplateCard = ({ template, onSelect }) => {
  const { name, desc, icon, accent } = template;

  return (
    <div
      onClick={() => onSelect(name)}
      className="group relative cursor-pointer rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
    >
      <div className="flex flex-col items-center text-center">
        <div
          className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full text-white ${accent}`}
        >
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
        <h3 className="text-xl font-semibold text-neutral-800">{name}</h3>
        <p className="mt-2 text-sm text-neutral-500">{desc}</p>

        <button
          className={`mt-6 rounded-full px-5 py-2 text-sm font-medium text-white transition ${accent} hover:opacity-90`}
        >
          Select {name}
        </button>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent transition group-hover:ring-blue-400" />
    </div>
  );
}

export default TemplateCard;
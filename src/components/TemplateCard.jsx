import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundPattern from "@assets/top_background.png";

const TemplateCard = ({ template, onSelect, onPreview }) => {
  const { name, desc, icon, accent } = template;

  return (
    <div
      onClick={() => onSelect(name)}
      className="group relative mx-auto w-full max-w-sm min-w-[280px] cursor-pointer rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <div
        className={`mb-4 h-32 rounded-lg ${accent} relative flex items-center justify-center overflow-hidden`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${BackgroundPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="relative z-10 text-center text-white">
          <FontAwesomeIcon icon={icon} size="3x" className="opacity-95" />
        </div>
      </div>

      <div className="text-center">
        <h3 className="font-display mb-2 text-xl font-semibold text-neutral-800">
          {name}
        </h3>

        <p className="mb-4 text-sm font-medium text-neutral-600">{desc}</p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect?.(name);
            }}
            className="cursor-pointer rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-neutral-800 hover:shadow-md"
          >
            Select {name}
          </button>

          {onPreview && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPreview(template);
              }}
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
            >
              Preview
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;

import { faAdd, faXmark, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LanguageInput = ({
  value,
  onChange,
  onAdd,
  placeholder = "Enter a language (e.g., English, Spanish)",
  languagesList,
  onRemove,
  onProficiencyChange,
  proficiencyLevels = [],
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="flex items-center text-sm font-medium text-neutral-900">
          <FontAwesomeIcon
            icon={faLanguage}
            className="mr-2 text-neutral-500"
          />
          Languages
        </label>
        {languagesList.length > 0 && (
          <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-500">
            {languagesList.length}{" "}
            {languagesList.length === 1 ? "language" : "languages"}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), onAdd())}
          placeholder={placeholder}
          className="flex-1 rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-500 transition-all focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none"
        />
        <button
          type="button"
          onClick={onAdd}
          disabled={!value.trim()}
          className="flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300"
        >
          <FontAwesomeIcon icon={faAdd} />
        </button>
      </div>

      <div className="min-h-[60px]">
        {languagesList.length > 0 ? (
          <div className="space-y-2">
            {languagesList.map((language) => (
              <div
                key={language.id}
                className="group flex items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 transition-all hover:border-neutral-300 hover:bg-neutral-100"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <span className="text-sm font-medium text-neutral-900">
                    {language.name}
                  </span>

                  <select
                    value={language.proficiency}
                    onChange={(e) =>
                      onProficiencyChange(language.id, e.target.value)
                    }
                    className="rounded-lg border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-700 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus:outline-none"
                  >
                    {proficiencyLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(language.id)}
                  className="ml-2 flex shrink-0 items-center justify-center rounded-full p-1.5 text-neutral-400 transition-all hover:bg-neutral-200 hover:text-neutral-700"
                  title="Remove language"
                >
                  <FontAwesomeIcon icon={faXmark} size="sm" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 py-8 text-center">
            <div className="mb-2 rounded-full bg-neutral-100 p-3">
              <FontAwesomeIcon icon={faLanguage} className="text-neutral-400" />
            </div>
            <p className="mb-1 text-sm text-neutral-500">
              No languages added yet
            </p>
            <p className="text-xs text-neutral-400">
              Add your first language above
            </p>
          </div>
        )}
      </div>

      {languagesList.length > 0 && (
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <span>
            Click the <FontAwesomeIcon icon={faXmark} size="xs" /> to remove a
            language
          </span>
          <span>Select proficiency level for each language</span>
        </div>
      )}
    </div>
  );
};

export default LanguageInput;

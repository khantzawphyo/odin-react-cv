import { Input, Textarea } from "@components/ui";
import { Button } from "@components/ui";
import useExperienceStore from "@stores/useExperienceStore";

const ExperienceSection = () => {
  const { experiences, addExperience, updateExperience, removeExperience } =
    useExperienceStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-900">
          Work Experience
        </h3>
        <Button
          onClick={() =>
            addExperience({
              company: "",
              position: "",
              startDate: "",
              endDate: "",
              workLocation: "",
              employmentType: "",
              workDescription: "",
              technologies: "",
            })
          }
        >
          Add Experience
        </Button>
      </div>

      {experiences.map((exp, index) => (
        <div key={index} className="rounded-lg border border-neutral-200 p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="Company"
              value={exp.company}
              onChange={(e) =>
                updateExperience(index, "company", e.target.value)
              }
              required
            />
            <Input
              label="Position"
              value={exp.position}
              onChange={(e) =>
                updateExperience(index, "position", e.target.value)
              }
              required
            />
            <Input
              label="Start Date"
              value={exp.startDate}
              onChange={(e) =>
                updateExperience(index, "startDate", e.target.value)
              }
              required
            />
            <Input
              label="End Date"
              value={exp.endDate}
              onChange={(e) =>
                updateExperience(index, "endDate", e.target.value)
              }
              optional
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="Location"
              value={exp.workLocation}
              onChange={(e) =>
                updateExperience(index, "workLocation", e.target.value)
              }
              optional
            />
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Employment Type
                <span className="ml-1 text-xs text-neutral-500">
                  (Optional)
                </span>
              </label>
              <select
                value={exp.employmentType || ""}
                onChange={(e) =>
                  updateExperience(index, "employmentType", e.target.value)
                }
                className="w-full rounded-lg border border-neutral-300 px-3 py-3 transition-colors focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none"
              >
                <option value="">Select type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
          </div>

          <Textarea
            label="Description"
            value={exp.workDescription}
            onChange={(e) =>
              updateExperience(index, "workDescription", e.target.value)
            }
            rows={4}
            required
          />

          <Input
            label="Technologies Used"
            value={exp.technologies}
            onChange={(e) =>
              updateExperience(index, "technologies", e.target.value)
            }
            optional
            className="mt-4"
          />

          <div className="mt-4 flex justify-end">
            <Button
              variant="danger"
              onClick={() => removeExperience(index)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}

      {experiences.length === 0 && (
        <div className="rounded-lg border-2 border-dashed border-neutral-300 p-6 text-center">
          <p className="text-neutral-500">No work experience added yet</p>
        </div>
      )}

      <div className="rounded-lg border border-red-200 bg-red-100 p-4">
        <div className="flex items-start gap-3">
          <p className="text-sm text-red-700">
            ⚠️ <span className="font-medium">Required fields</span> will be
            displayed on your CV. Complete all sections for the best results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;

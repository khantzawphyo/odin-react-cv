import useEducationStore from "@stores/useEducationStore";
import { Input, Textarea } from "@components/ui";

const EducationSection = () => {
  const { education, addEducation, updateEducation, removeEducation } =
    useEducationStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-900">Education</h3>
        <button
          type="button"
          className="cursor-pointer rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          onClick={() =>
            addEducation({
              institution: "",
              degree: "",
              field: "",
              graduationDate: "",
              gpa: "",
              educationLocation: "",
              honors: "",
              coursework: "",
            })
          }
        >
          Add Education
        </button>
      </div>

      {education.map((edu, index) => (
        <div key={index} className="rounded-lg border border-neutral-200 p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="Institution"
              value={edu.institution}
              onChange={(e) =>
                updateEducation(index, "institution", e.target.value)
              }
              required
            />
            <Input
              label="Degree"
              value={edu.degree}
              onChange={(e) => updateEducation(index, "degree", e.target.value)}
              required
            />
            <Input
              label="Field of Study"
              value={edu.field}
              onChange={(e) => updateEducation(index, "field", e.target.value)}
              required
            />
            <Input
              label="Graduation Date"
              value={edu.graduationDate}
              onChange={(e) =>
                updateEducation(index, "graduationDate", e.target.value)
              }
              required
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="GPA"
              value={edu.gpa}
              onChange={(e) => updateEducation(index, "gpa", e.target.value)}
              optional
            />
            <Input
              label="Location"
              value={edu.educationLocation}
              onChange={(e) =>
                updateEducation(index, "educationLocation", e.target.value)
              }
              optional
            />
          </div>

          <div className="mt-4 space-y-2">
            <Textarea
              label="Honors & Awards"
              value={edu.honors}
              onChange={(e) => updateEducation(index, "honors", e.target.value)}
              rows={2}
              optional
            />
            <Textarea
              label="Relevant Coursework"
              value={edu.coursework}
              onChange={(e) =>
                updateEducation(index, "coursework", e.target.value)
              }
              rows={2}
              optional
            />
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="rounded-lg border border-red-300 px-3 py-1 text-sm text-red-600 transition-colors hover:bg-red-50"
              onClick={() => removeEducation(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {education.length === 0 && (
        <div className="rounded-lg border-2 border-dashed border-neutral-300 p-6 text-center">
          <p className="text-neutral-500">No education entries added yet</p>
        </div>
      )}

      <div className="rounded-lg border border-fuchsia-200 bg-fuchsia-100 p-4">
        <div className="flex items-start gap-3">
          <p className="text-sm text-fuchsia-700">
            ⚠️ <span className="font-medium">Required fields</span> will be
            displayed on your CV. Complete all sections for the best results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;

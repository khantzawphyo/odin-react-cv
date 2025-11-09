import { useState } from "react";
import { Input, SkillInput, LanguageInput } from "@components/ui";
import useSkillsStore from "@stores/useSkillsStore";
import { faUserTie, faCode } from "@fortawesome/free-solid-svg-icons";

const SkillsSection = () => {
  const {
    skills,
    addTechnicalSkill,
    updateTechnicalSkill,
    removeTechnicalSkill,
    addProfessionalSkill,
    removeProfessionalSkill,
    addLanguage,
    updateLanguage,
    removeLanguage,
    addCertification,
    updateCertification,
    removeCertification,
  } = useSkillsStore();

  const [newTechSkill, setNewTechSkill] = useState("");
  const [newProfSkill, setNewProfSkill] = useState("");
  const [newLang, setNewLang] = useState("");

  const proficiencyLevels = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "expert", label: "Expert" },
  ];

  const languageLevels = [
    { value: "basic", label: "Basic" },
    { value: "conversational", label: "Conversational" },
    { value: "fluent", label: "Fluent" },
    { value: "native", label: "Native" },
  ];

  const handleAddTechSkill = () => {
    if (newTechSkill.trim()) {
      addTechnicalSkill(newTechSkill.trim());
      setNewTechSkill("");
    }
  };

  const handleAddProfSkill = () => {
    if (newProfSkill.trim()) {
      addProfessionalSkill(newProfSkill.trim());
      setNewProfSkill("");
    }
  };

  const handleAddLanguage = () => {
    if (newLang.trim()) {
      addLanguage(newLang.trim());
      setNewLang("");
    }
  };

  const handleLanguageProficiencyChange = (id, proficiency) => {
    updateLanguage(id, { proficiency });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-neutral-900">
          Skills & Languages
        </h3>

        <div className="space-y-6">
          <SkillInput
            value={newTechSkill}
            onChange={setNewTechSkill}
            onAdd={handleAddTechSkill}
            placeholder="Enter a technical skill (e.g., React, Python, AWS)"
            label="Technical Skills"
            icon={faCode}
            skillsList={skills.technicalSkills}
            onRemove={removeTechnicalSkill}
            showProficiency={true}
            onProficiencyChange={(id, proficiency) =>
              updateTechnicalSkill(id, { proficiency })
            }
            proficiencyLevels={proficiencyLevels}
          />

          <SkillInput
            value={newProfSkill}
            onChange={setNewProfSkill}
            onAdd={handleAddProfSkill}
            placeholder="Enter a professional skill (e.g., Leadership, Communication)"
            label="Professional Skills"
            icon={faUserTie}
            skillsList={skills.professionalSkills}
            onRemove={removeProfessionalSkill}
          />

          <LanguageInput
            value={newLang}
            onChange={setNewLang}
            onAdd={handleAddLanguage}
            placeholder="Enter a language (e.g., English, Spanish)"
            languagesList={skills.languages}
            onRemove={removeLanguage}
            onProficiencyChange={handleLanguageProficiencyChange}
            proficiencyLevels={languageLevels}
          />
        </div>
      </div>

      {/* Certifications Section */}
      <div className="border-t border-neutral-200 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-900">
            Certifications
          </h3>
          <button
            type="button"
            onClick={addCertification}
            className="cursor-pointer rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Add Certification
          </button>
        </div>

        <div className="space-y-4">
          {skills.certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-lg border border-neutral-200 p-4"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  label="Certification Name"
                  value={cert.certificationName}
                  onChange={(e) =>
                    updateCertification(
                      index,
                      "certificationName",
                      e.target.value,
                    )
                  }
                  placeholder="AWS Certified Developer"
                  optional
                />
                <Input
                  label="Issuing Organization"
                  value={cert.issuingOrg}
                  onChange={(e) =>
                    updateCertification(index, "issuingOrg", e.target.value)
                  }
                  placeholder="Amazon Web Services"
                  optional
                />
                <Input
                  label="Issue Date"
                  value={cert.certIssueDate}
                  onChange={(e) =>
                    updateCertification(index, "certIssueDate", e.target.value)
                  }
                  placeholder="Jun 2023"
                  optional
                />
                <Input
                  label="Expiration Date"
                  value={cert.certExpiryDate}
                  onChange={(e) =>
                    updateCertification(index, "certExpiryDate", e.target.value)
                  }
                  placeholder="Jun 2026"
                  optional
                />
              </div>
              <Input
                label="Credential URL"
                value={cert.credentialUrl}
                onChange={(e) =>
                  updateCertification(index, "credentialUrl", e.target.value)
                }
                placeholder="https://www.credly.com/users/username"
                optional
                className="mt-4"
              />
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => removeCertification(index)}
                  className="rounded-lg border border-red-300 px-3 py-1 text-sm text-red-600 transition-colors hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          {skills.certifications.length === 0 && (
            <div className="rounded-lg border-2 border-dashed border-neutral-300 p-6 text-center">
              <p className="text-neutral-500">No certifications added yet</p>
            </div>
          )}
        </div>
      </div>

      <div className="rounded-lg bg-blue-50 p-4">
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> Add your most relevant skills and
          certifications.
        </p>
      </div>
    </div>
  );
};

export default SkillsSection;

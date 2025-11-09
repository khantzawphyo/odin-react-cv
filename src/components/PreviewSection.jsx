import { forwardRef } from "react";
import EmptyState from "@components/EmptyState";
import CVTemplate from "@components/cv-templates/CVTemplate";

const PreviewSection = forwardRef(({ cvData }, ref) => {
  const isEmpty =
    !cvData ||
    (!cvData.personalInfo?.fullName &&
      !cvData.personalInfo?.summary &&
      (!cvData.experiences || cvData.experiences.length === 0) &&
      (!cvData.education || cvData.education.length === 0) &&
      (!cvData.skills?.technicalSkills ||
        cvData.skills.technicalSkills.length === 0) &&
      (!cvData.skills?.professionalSkills ||
        cvData.skills.professionalSkills.length === 0) &&
      (!cvData.skills?.languages || cvData.skills.languages.length === 0) &&
      (!cvData.skills?.certifications ||
        cvData.skills.certifications.length === 0));

  return (
    <section className="hidden flex-1 overflow-y-auto md:block">
      <div className="mx-auto max-w-4xl">
        <div className="border-2 border-neutral-300 bg-white shadow-lg">
          <div ref={ref}>
            {!isEmpty ? <CVTemplate cvData={cvData} /> : <EmptyState />}
          </div>
        </div>
      </div>
    </section>
  );
});

PreviewSection.displayName = "PreviewSection";

export default PreviewSection;

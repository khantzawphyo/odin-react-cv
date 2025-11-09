export const formatUrl = (url) =>
  url ? url.replace(/^https?:\/\/(www\.)?/, "") : "";

export const getProficiencyText = (level) => {
  const levels = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    expert: "Expert",
    basic: "Basic",
    conversational: "Conversational",
    fluent: "Fluent",
    native: "Native",
  };
  return levels[level] || level || "";
};

export const getPdfFileName = (fullName) => {
  if (fullName && fullName.trim()) {
    const cleanName = fullName
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");
    return `${cleanName}_cv.pdf`;
  }
  return "cv.pdf";
};

export const isCvDataEmpty = (cvData) => {
  if (!cvData) return true;

  const {
    personalInfo = {},
    experiences = [],
    education = [],
    skills = {},
  } = cvData || {};

  return (
    !personalInfo ||
    (!personalInfo?.fullName &&
      !personalInfo?.summary &&
      (!experiences || experiences.length === 0) &&
      (!education || education.length === 0) &&
      (!skills?.technicalSkills || skills.technicalSkills.length === 0) &&
      (!skills?.professionalSkills || skills.professionalSkills.length === 0) &&
      (!skills?.languages || skills.languages.length === 0) &&
      (!skills?.certifications || skills.certifications.length === 0))
  );
};

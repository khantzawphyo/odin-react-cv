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


/**
 * Normalize a URL by removing the protocol (http/https), optional "www." prefix, and any trailing slash.
 *
 * If the input is not a non-empty string, the function returns an empty string.
 *
 * Notes:
 * - The removal of the protocol and "www." is case-insensitive.
 * - The function does not validate that the remaining string is a well-formed hostname or path — it only strips the specified parts.
 *
 * @param {string} url - The URL to format (e.g. "https://www.example.com/").
 * @returns {string} The formatted URL without protocol, "www." prefix, or trailing slash (e.g. "example.com"), or an empty string for invalid input.
 *
 * @example
 * formatUrl("https://www.example.com/"); // "example.com"
 * @example
 * formatUrl("http://sub.domain.org/path/"); // "sub.domain.org/path"
 * @example
 * formatUrl(""); // ""
 * @example
 * formatUrl(null); // ""
 */
export const formatUrl = (url) => {
  if (typeof url !== "string" || url.length === 0) {
    return "";
  }
  let formattedUrl = url;
  formattedUrl = formattedUrl.replace(/^(https?:\/\/)?(www\.)?/i, "");
  formattedUrl = formattedUrl.replace(/\/$/, "");
  return formattedUrl;
};

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

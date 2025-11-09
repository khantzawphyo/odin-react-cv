export const formatUrl = (url) =>
  url ? url.replace(/^https?:\/\/(www\.)?/, "") : "";

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


const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const SUPPORTED_FORMATS = new Set([
  "pdf",
  "doc",
  "docx",
  "txt",
  "html",
  "rtf",
  "odt",
  "png",
  "jpg",
  "jpeg",
  "webp",
  "pptx",
]);

export const validateFile = (file) => {
  if (file.size > MAX_FILE_SIZE) {
    return "File size exceeds the limit of 5MB.";
  }
  if (!SUPPORTED_FORMATS.has(file.name.split(".").pop().toLowerCase())) {
    return "Unsupported file format.";
  }
  return "";
};

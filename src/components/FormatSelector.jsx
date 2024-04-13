
import Image from "next/image";
import { toast } from "react-toastify"; // Make sure to import toast

export default function FormatSelector({
  selectedFile,
  formats,
  onSelectFormat,
  onRemoveSelectedFile,
  fileIcon,
  fileStatus,
  downloadLink,
  onCancel,
  errorMessage,
}) {
  const handleFormatChange = (value) => {
    onSelectFormat(value); // This will update the formats array in the parent component
  };

  // Call this function when there's an error to display the toast notification
  const showErrorToast = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Show error toast when there's an error
  if (fileStatus === "Error" && errorMessage) {
    showErrorToast(errorMessage);
  }

  return (
    <div className="bg-white p-4 shadow rounded-lg grid grid-cols-3 items-center my-5">
      <div className="flex items-center">
        <div className="shrink-0 shadow rounded-sm">
          <Image className="h-8 w-8" src={fileIcon} alt="file type icon" />
        </div>
        <div className="ml-4 max-w-60 min-w-60">
          <div className="text-sm font-medium text-gray-900">
            {selectedFile.name}
          </div>
          <div className="text-sm text-gray-500">
            {(selectedFile.size / 1024).toFixed(2)} KB
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          <label htmlFor="format" className="sr-only">
            Convert to
          </label>
          <select
            name="format"
            id="format"
            className={`block w-full pl-3 pr-10 py-2 border text-base`}
            onChange={(e) => handleFormatChange(e.target.value)}
            defaultValue={""}
          >
            <option value="" disabled>
              Select format
            </option>
            {formats.map((format) => (
              <option key={format} value={format}>
                {format.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="ml-4 flex gap-4 items-center justify-end">
        {fileStatus === "Converting" && <p>Converting...</p>}
        {fileStatus === "Finished" && downloadLink && (
          <a href={downloadLink} target="_blank" rel="noopener noreferrer" download className="download-link bg-[#2BABE2] font-medium text-white text-[15px] rounded-sm transition-all hover:shadow-md px-2.5 py-1.5">
            Download
          </a>
        )}
        {fileStatus === "Converting" && onCancel && (
          <button onClick={onCancel} className="cancel-button">
            Cancel
          </button>
        )}

        <button
          type="button"
          className="text-gray-400 hover:text-gray-500"
          onClick={onRemoveSelectedFile}
        >
          <span className="sr-only">Remove file</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

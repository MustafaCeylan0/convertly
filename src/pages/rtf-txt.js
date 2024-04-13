import { useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import FileUpload from "@/components/FileUpload";
import FormatSelector from "@/components/FormatSelector";
import Features from "@/components/Features";
import { conversionTypes } from "@/utils/conversionTypes";
import { validateFile } from "@/utils/validateFile";
import { fileIcons } from "@/utils/fileIcons";
import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import { useRouter } from "next/router";

export default function RtfTotxt() {
  const router = useRouter();
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [conversionInProgress, setConversionInProgress] = useState({});
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formats, setFormats] = useState([]);
  const [downloadLinks, setDownloadLinks] = useState([]);
  const [fileStatuses, setFileStatuses] = useState({});

const handleFilesSelect = (files) => {
    const validFiles = [];
    const errors = {};
    files.forEach((file, index) => {
      const error = validateFile(file);
      if (error) {
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        errors[index] = error;
      } else {
        validFiles.push(file);
      }
    });

    setSelectedFiles(validFiles);
    setDownloadLinks([]);
    setFileStatuses({});

    // Set initial formats to an empty string for each valid file
    const newFormats = validFiles.map(() => "");
    setFormats(newFormats);

  };

  const handleSubmit = async () => {
    const allFormatsSelected = formats.every((format) => format !== "");
    if (!allFormatsSelected) {
      toast.error("Please select a format for all files before converting", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const newFileStatuses = {};
    const newConversionInProgress = {};
    selectedFiles.forEach((_, index) => {
      newFileStatuses[index] = "uploading";
      newConversionInProgress[index] = true;
    });
    setFileStatuses(newFileStatuses);
    setConversionInProgress(newConversionInProgress);

    const links = await Promise.all(
      selectedFiles.map(async (file, index) => {
        // Set the conversion in progress state for the current file
        setConversionInProgress((prev) => ({ ...prev, [index]: true }));

        const format = formats[index];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("format", format);

        try {
          const response = await fetch("http://127.0.0.1:3002/convert", {
            method: "POST",
            body: formData,
            headers: { api_key: "9823328982989" },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const result = await response.json();
          setFileStatuses((prevStatuses) => ({
            ...prevStatuses,
            [index]: "Finished",
          }));
          setConversionInProgress((prev) => ({ ...prev, [index]: false }));
          return result.downloadLink;
        } catch (error) {
          console.error("Error during file conversion:", error);
          toast.error(`Error in file ${index + 1}: ${error.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setFileStatuses((prevStatuses) => ({
            ...prevStatuses,
            [index]: "Error",
          }));
          setConversionInProgress((prev) => ({ ...prev, [index]: false }));
          return null;
        }
      })
    );

    setDownloadLinks(links);
  };

  const handleFormatSelect = (selectedFormat, index) => {
    const newFormats = [...formats];
    newFormats[index] = selectedFormat;
    setFormats(newFormats);
  };

  // Function to remove a selected file
  const onRemoveSelectedFile = (index) => {
    const newSelectedFiles = selectedFiles.filter((_, i) => i !== index);
    const newFormats = formats.filter((_, i) => i !== index);
    const newDownloadLinks = downloadLinks.filter((_, i) => i !== index);
    setSelectedFiles(newSelectedFiles);
    setFormats(newFormats);
    setDownloadLinks(newDownloadLinks);
  };

  // Function to capitalize words
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  // Function to parse and format slug into a readable string
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const parseSlug = (pathname) => {
    const slug = pathname.startsWith('/') ? pathname.slice(1) : pathname;
    const parts = slug.split("-");
    if (
      parts.length === 2 &&
      parts[1] !== "converter" &&
      parts[1] !== "convertor"
    ) {
      // Format for format-to-format converter
      return {
        title: `${capitalize(parts[0])} to ${capitalize(parts[1])} Converter`,
        description: `Convert your ${parts[0].toLowerCase()} files to ${parts[1].toLowerCase()} online & free`,
      };
    } else {
      // Format for single format converter
      return {
        title: `${capitalize(parts[0])} Converter`,
        description: `Convert files to and from ${parts[0].toLowerCase()} online`,
      };
    }
  };

  // Update SEO title and description based on slug
  useEffect(() => {
    if (router.pathname && router.pathname.length > 0) {
      const { title, description } = parseSlug(router?.pathname);
      setSeoTitle(title);
      setSeoDescription(description);
    }
  }, [parseSlug, router.pathname]);

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-10">
<ToastContainer />     
<SEO title={seoTitle} description={seoDescription} />
<PageTitle title={seoTitle} description={seoDescription} />

       {/* FileUpload component */}
      <FileUpload
        onFilesSelect={handleFilesSelect}
        isDragging={isDragging}
        setIsDragging={setIsDragging}
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
      />

      {selectedFiles.map((file, index) => {
        if (file) {
          return (
            <div key={index}>
              <FormatSelector
                selectedFile={file}
                formats={
                  conversionTypes[file.name.split(".").pop().toLowerCase()] ||
                  []
                }
                selectedFormat={formats[index]}
                onSelectFormat={(format) => handleFormatSelect(format, index)}
                onRemoveSelectedFile={() => onRemoveSelectedFile(index)}
                fileIcon={fileIcons[file.name.split(".").pop().toLowerCase()]}
                fileStatus={fileStatuses[index]}
                downloadLink={downloadLinks[index]}
              />
            </div>
          );
        }
        return null; // Return null or some fallback UI if 'file' is not defined
      })}

      {/* Convert button */}
      <div className="flex justify-center mt-10">
        {selectedFiles.length > 0 && (
          <button
            className={` text-white font-bold py-2 px-10 rounded-full ${!formats.every((format) => format !== "") ? "bg-slate-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`}
            onClick={handleSubmit}
            disabled={!formats.every((format) => format !== "")}
          >
            Convert
          </button>
        )}
      </div>

      {/* Features component */}
      <div className="mt-20">
        <Features />
      </div>    </div>
  );
}

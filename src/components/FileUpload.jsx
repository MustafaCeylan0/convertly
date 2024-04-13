import React, { useState, useRef, useCallback, useEffect } from 'react';
import { FaPlus } from "react-icons/fa";

export default function FileUpload({ onFilesSelect, setSelectedFiles, selectedFiles }) {
  const [isDragging, setIsDragging] = useState(false);
  const dragCounter = useRef(0);

  const handleDrag = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const handleDragIn = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    dragCounter.current++;
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragOut = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current > 0) return;
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(event.dataTransfer.files);
      const updatedFiles = [...selectedFiles, ...droppedFiles];
      setSelectedFiles(updatedFiles);
      onFilesSelect(updatedFiles);
      dragCounter.current = 0;
    }
  }, [selectedFiles, setSelectedFiles, onFilesSelect]);

  useEffect(() => {
    window.addEventListener("dragenter", handleDragIn);
    window.addEventListener("dragleave", handleDragOut);
    window.addEventListener("dragover", handleDrag);
    window.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("dragenter", handleDragIn);
      window.removeEventListener("dragleave", handleDragOut);
      window.removeEventListener("dragover", handleDrag);
      window.removeEventListener("drop", handleDrop);
    };
  }, [handleDragIn, handleDragOut, handleDrag, handleDrop]);

  return (
    <>
      {isDragging && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity">
          <div className="text-center">
            <p className="text-[120px] text-white font-bold flex justify-center self-center">
              <FaPlus />
            </p>
            <p className="text-white">Release to upload</p>
          </div>
        </div>
      )}
      <div className="relative z-0 block">
        <input
          type="file"
          multiple
          onChange={(e) => {
            const newFiles = Array.from(e.target.files);
            const updatedFiles = [...selectedFiles, ...newFiles];
            setSelectedFiles(updatedFiles);
            onFilesSelect(updatedFiles);
          }}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="flex flex-col items-center justify-center p-10 border-4 border-dashed border-gray-200 rounded-lg bg-white shadow-lg">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M38 12H10a2 2 0 00-2 2v20a2 2 0 002 2h28a2 2 0 002-2V14a2 2 0 00-2-2zM10 20h28"
            />
          </svg>
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <button className="mt-2 rounded bg-red-600 px-4 py-2 text-white font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            Choose File
          </button>
        </div>
      </div>
    </>
  );
}

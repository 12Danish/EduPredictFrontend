import { useState } from "react";
const useUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.name.endsWith(".csv") || file.name.endsWith(".xlsx")) {
        setUploadedFile(file);
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.name.endsWith(".csv") || file.name.endsWith(".xlsx")) {
        setUploadedFile(file);
      }
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  return {
    dragActive,
    uploadedFile,
    handleDrag,
    handleDrop,
    handleFileChange,
    removeFile,
  };
};

export default useUpload;

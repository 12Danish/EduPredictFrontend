import { Upload, BookOpen, Download, FileText, Info } from "lucide-react";
import {
  columnRequirements,
  basicRequirements,
  sampleData,
} from "../constants";
const UploadSection = ({
  uploadedFile,
  dragActive,
  handleDrag,
  handleDrop,
  handleFileChange,
  removeFile,
  onAnalyze,
}) => {
  const downloadSampleCSV = () => {
    const csvContent = convertToCSV(sampleData);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "sample_student_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const convertToCSV = (data) => {
    const headers = Object.keys(data[0]);
    const csvHeaders = headers.join(",");
    const csvRows = data.map((row) =>
      headers
        .map((header) =>
          typeof row[header] === "string" && row[header].includes(",")
            ? `"${row[header]}"`
            : row[header]
        )
        .join(",")
    );
    return [csvHeaders, ...csvRows].join("\n");
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 text-white">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <FileText className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Upload Student Data</h3>
          <p className="text-indigo-100">
            Upload your CSV or Excel file containing student information to
            begin the analysis
          </p>
        </div>
      </div>

      <div className="p-8">
        {/* Sample CSV Download */}
        <div className="mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <Info className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">
                    Need a template?
                  </h4>
                  <p className="text-sm text-blue-700">
                    Download our sample CSV file to see the required format
                  </p>
                </div>
              </div>
              <button
                onClick={downloadSampleCSV}
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Sample CSV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Upload Area */}
        <UploadArea
          dragActive={dragActive}
          uploadedFile={uploadedFile}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
          handleFileChange={handleFileChange}
        />

        {/* Uploaded File Display */}
        <UploadedFileDisplay
          uploadedFile={uploadedFile}
          removeFile={removeFile}
          onAnalyze={onAnalyze}
        />

        {/* File Requirements */}
        <FileRequirements />
      </div>
    </div>
  );
};

// Upload Area Component
const UploadArea = ({
  dragActive,
  uploadedFile,
  handleDrag,
  handleDrop,
  handleFileChange,
}) => {
  if (uploadedFile) return null;

  return (
    <div className="mb-8">
      <div
        className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
          dragActive
            ? "border-indigo-500 bg-indigo-50"
            : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept=".csv,.xlsx"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        <div className="flex flex-col items-center space-y-4">
          <div className="bg-indigo-100 rounded-full p-4">
            <Upload className="h-12 w-12 text-indigo-600" />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-900 mb-2">
              Drop your file here or click to browse
            </p>
            <p className="text-gray-600">
              Supports CSV and Excel (.xlsx) files.
            </p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Choose File
          </button>
        </div>
      </div>
    </div>
  );
};

// Uploaded File Display Component
const UploadedFileDisplay = ({ uploadedFile, removeFile, onAnalyze }) => {
  if (!uploadedFile) return null;

  return (
    <div className="mb-8">
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 rounded-full p-2">
              <BookOpen className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-green-900">
                {uploadedFile.name}
              </p>
             
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={removeFile}
              className="text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              Remove
            </button>
            <button
              onClick={onAnalyze}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Analyze Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced File Requirements Component
const FileRequirements = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
        <FileText className="h-5 w-5 text-gray-600" />
        <span>File Requirements</span>
      </h4>

      {/* Basic Requirements */}
      <div className="mb-6">
        <h5 className="font-medium text-gray-800 mb-3">Basic Requirements:</h5>
        <ul className="space-y-2">
          {basicRequirements.map((requirement, index) => (
            <li
              key={index}
              className="flex items-start space-x-2 text-sm text-gray-600"
            >
              <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>{requirement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Column Requirements */}
      <div>
        <h5 className="font-medium text-gray-800 mb-3">Required Columns:</h5>
        <div className="space-y-4">
          {columnRequirements.map((column, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border border-gray-200"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h6 className="font-semibold text-gray-900 text-sm">
                    {column.name}
                  </h6>
                  <p className="text-xs text-gray-600 mt-1 mb-2">
                    {column.description}
                  </p>
                  <div className="bg-gray-50 rounded px-3 py-1 text-xs text-gray-700">
                    <span className="font-medium">Example: </span>
                    {column.example}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Note */}
      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="bg-amber-100 rounded-full p-1 mt-0.5">
            <Info className="h-4 w-4 text-amber-600" />
          </div>
          <div>
            <h6 className="font-semibold text-amber-900 text-sm">
              Important Note
            </h6>
            <p className="text-xs text-amber-800 mt-1">
              All grade values should be normalized between 0 and 1. For
              example, if a student scored 85 out of 100, enter 0.85. This
              ensures consistent analysis across different grading systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSection;

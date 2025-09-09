import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import PrivacyNotice from "../Components/Privacy";
import FeaturesGrid from "../Components/Features";
import UploadSection from "../Components/Upload";
import useUpload from "../CustomHooks/useUpload";
import processStudentData from "../backendCom/processStudentData";
import { useNavigate } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import Loading from "../Components/Loading";
// Main HomePage Component
const HomePage = ({ setResult }) => {
  const {
    dragActive,
    uploadedFile,
    handleDrag,
    handleDrop,
    handleFileChange,
    removeFile,
  } = useUpload();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    // Add your analysis logic here
    console.log("Analyzing file:", uploadedFile.name);

    setLoading(true);
    console.log("Analyzing file:", uploadedFile.name);

    const response = await processStudentData(uploadedFile);
    console.log("Response:", response);
    setResult(response); // save backend response
    if (response.status == 200) {
      console.log("Navigating to results page");
      navigate("/results")
    } else {
      console.log("Navigating to error page");
      navigate("/error")
    }

    try {
      setLoading(true); // start loading
      console.log("Analyzing file:", uploadedFile.name);

      const response = await processStudentData(uploadedFile);
      setResult(response); // save backend response
      console.log("Response:", response);
    } catch (error) {
      console.error("Error analyzing file:", error);
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
        <FeaturesGrid />

        <UploadSection
          uploadedFile={uploadedFile}
          dragActive={dragActive}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
          handleFileChange={handleFileChange}
          removeFile={removeFile}
          onAnalyze={handleAnalyze}
        />

        <PrivacyNotice />
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default HomePage;

import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import PrivacyNotice from "../Components/Privacy";
import FeaturesGrid from "../Components/Features";
import UploadSection from "../Components/Upload";
import useUpload from "../CustomHooks/useUpload";
import processStudentData from "../backendCom/processStudentData";
// Main HomePage Component
const HomePage = () => {
  const {
    dragActive,
    uploadedFile,
    handleDrag,
    handleDrop,
    handleFileChange,
    removeFile,
  } = useUpload();

  const handleAnalyze = () => {
    // Add your analysis logic here
    console.log("Analyzing file:", uploadedFile.name);
    processStudentData(uploadedFile)
    
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
    </div>
  );
};

export default HomePage;

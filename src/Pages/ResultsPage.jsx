import PageHeader from "../Components/ResultsPage/PageHeader";
import StatisticsCards from "../Components/ResultsPage/StatisticsCard";
import ResultsTable from "../Components/ResultsPage/ResultsTable";
import SuggestionsSection from "../Components/ResultsPage/SuggestionsSection";
import BackToHomeButton from "../Components/HomeButton";
const ResultsPage = ({ result }) => {
  const data = result?.data.final_df || [];
  const suggestions = result?.data.suggestions || "";

  // Calculate statistics
  const highRiskCount = data.filter((student) => student.Risk === 1).length;
  const lowRiskCount = data.length - highRiskCount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <PageHeader />

        <StatisticsCards
          totalStudents={data.length}
          highRiskCount={highRiskCount}
          lowRiskCount={lowRiskCount}
        />

        <ResultsTable data={data} />

        <SuggestionsSection suggestions={suggestions} />

        <BackToHomeButton />
      </div>
    </div>
  );
};

export default ResultsPage;

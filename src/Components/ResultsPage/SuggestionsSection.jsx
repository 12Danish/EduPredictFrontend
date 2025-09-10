import ReactMarkdown from "react-markdown";

const SuggestionsSection = ({ suggestions }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 mb-8">
      <div className="px-6 py-4 border-b border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900">
          Recommendations
        </h2>
      </div>
      <div className="p-6">
      
        {suggestions ? (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800 leading-loose space-y-3">
              <ReactMarkdown >
                {suggestions}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center">
            <p className="text-slate-600">
              No specific recommendations available at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuggestionsSection;

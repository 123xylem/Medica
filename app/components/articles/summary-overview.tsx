import KeywordMap from "./keyword-map";
import ArticleSummary from "./article-summary";
import { Loader2 } from "lucide-react";

interface SummaryOverviewProps {
  keywords: Record<string, number>;
  summaryText: string | null;
  isLoading: boolean;
}

const SummaryOverview = ({
  keywords,
  summaryText,
  isLoading,
}: SummaryOverviewProps) => {
  return (
    <div className="relative">
      {/* Keyword map in top right */}
      <div className="clear-both">
        <div className="float-right w-1/3 ml-4 mb-4 clear-right Keyword-Map">
          <KeywordMap keywords={keywords} />
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center p-4 Summary-Text">
            <Loader2 className="animate-spin" />
            <span className="ml-2">Summarising...</span>
          </div>
        ) : (
          summaryText && <ArticleSummary summaryText={summaryText} />
        )}
      </div>
    </div>
  );
};

export default SummaryOverview;

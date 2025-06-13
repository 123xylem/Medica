const ArticleSummary = ({ summaryText }: { summaryText: string }) => {
  return (
    <div className="text-sm text-gray-500">
      <h2 className="text-md font-bold">Meta Summary</h2>
      <p>{summaryText}</p>
    </div>
  );
};

export default ArticleSummary;

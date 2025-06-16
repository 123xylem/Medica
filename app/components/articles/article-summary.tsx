const ArticleSummary = ({ summaryText }: { summaryText: string }) => {
  return (
    <div className="text-sm text-gray-500">
      <h3 className="text-lg text-white font-bold">Article Summary</h3>
      <p>{summaryText}</p>
    </div>
  );
};

export default ArticleSummary;

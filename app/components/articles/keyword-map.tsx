interface KeywordMapProps {
  keywords: Record<string, number>;
}

const KeywordMap: React.FC<KeywordMapProps> = ({ keywords }) => {
  const frequencies = Object.values(keywords);
  const avg = frequencies.reduce((a, b) => a + b, 0) / frequencies.length;

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2 className="text-2xl font-bold">Keyword Map</h2>
      <div className="flex flex-wrap max-w-[500px] gap-2 border-2 border-gray-300 rounded-md p-4">
        {Object.keys(keywords).map((word) => {
          // Calculate size relative to average, with min and max bounds
          const size = Math.min(Math.max((keywords[word] / avg) * 20, 14), 48);

          return (
            <div key={word} className="flex max-h-[200px] justify-center ">
              <p style={{ fontSize: `${size}px` }} className="text-gray-500">
                {word}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeywordMap;

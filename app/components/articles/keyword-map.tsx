interface KeywordMapProps {
  keywords: Record<string, number>;
}

const KeywordMap: React.FC<KeywordMapProps> = ({ keywords }) => {
  const frequencies = Object.values(keywords);
  const avg = frequencies.reduce((a, b) => a + b, 0) / frequencies.length;

  return (
    <div className="flex flex-col  justify-center gap-2 col-span-1 row-span-2">
      <h3 className="text-lg font-bold">Keyword Map</h3>
      <div className="flex flex-wrap max-w-[300px] gap-1 border-2 border-gray-300 rounded-lg p-2">
        {Object.keys(keywords).map((word) => {
          // Calculate size relative to average, with min and max bounds
          const size = Math.min(Math.max((keywords[word] / avg) * 15, 14), 36);

          return (
            <div
              key={word}
              className={`flex max-h-[200px] ${
                size > 15
                  ? "font-bold text-gray-500"
                  : "font-normal text-gray-100"
              }`}
            >
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

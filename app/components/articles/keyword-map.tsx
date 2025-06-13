const KeywordMap = ({ keywords }: { keywords: string[] }) => {
  return <div>{keywords.map((keyword) => keyword)}</div>;
};

export default KeywordMap;

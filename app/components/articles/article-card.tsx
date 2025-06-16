import { Article } from "@/types";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className="flex flex-col  border-2 max-w-[300px] border-gray-300 rounded-md p-4">
      <h2 className="text-lg font-bold">{article.title}</h2>
      <h4 className="text-sm text-gray-500">{article.citation}</h4>
      <p className="text-xs text-gray-500">{article.abstract}</p>
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        <p className="text-xs text-blue-500">View Article</p>
      </a>
    </div>
  );
};

export default ArticleCard;

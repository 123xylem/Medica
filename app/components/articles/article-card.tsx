import { Article } from "@/types";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-lg font-bold">{article.title}</h2>
      <p className="text-sm text-gray-500">{article.content}</p>
      <p className="text-xs text-gray-500">{article.authors}</p>
      <p className="text-xs text-gray-500">{article.date}</p>
      <p className="text-xs text-gray-500">{article.url}</p>
    </div>
  );
};

export default ArticleCard;

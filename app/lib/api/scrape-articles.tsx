export default async function scrapeArticles(query: string) {
  const queryString = query + " meta-analysis";

  const res = await fetch(
    `http://127.0.0.1:5000/api/pubmed?term=${queryString}&page=1`
  );
  const data = await res.json();
  return data;
}

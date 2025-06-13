export default async function scrapeArticles(search: string = "") {
  try {
    console.log(search, "trying");
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${search}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

import axios from "axios";

export const apiRequest = async (query, pageParam) => {
  let fetched = null;
  try {
    await axios
      .get(import.meta.env.VITE_APP_API_ENDPOINT, {
        params: {
          key: import.meta.env.VITE_APP_API_KEY,
          cx: import.meta.env.VITE_APP_CSE_ID,
          q: query.toString(),
          start: pageParam,
          searchType: localStorage.getItem("tab") === "Images" ? "image" : null,
        },
      })
      .then((response) => (fetched = response));
  } catch (error) {
    if (error.response) {
      throw Error(
        `axios Error: data:${error.response.data}, status:${error.response.status}, headers:${error.response.headers}`
      );
    } else if (error.request) {
      throw Error(
        `Request was made but no response was received. Status:${error.request.status}`,
        
      );
    }
  }

  const data = fetched.data;

  return {
    items: data.items || [],
    currentPage: +data.queries.request[0].startIndex,
    nextPage: +data.queries.nextPage[0].startIndex,
    prevPage:
      +data.queries.request[0].startIndex > 1
        ? +data.queries.request[0].startIndex - 10
        : null,
  };
};

import axios from "axios";

async function Search(term) {
  const handleSearch = async (term) => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          headers: {
            Authorization:
              "Client-ID _ljRUKzsbBWOSmcPcVRjmsayXAhzhN_EfMyjaHZsDuE",
          },
          params: {
            query: term,
          },
        }
      );
      return response.data.results;
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
      throw error; // Rethrow the error to propagate it to the caller
    }
  };

  return handleSearch(term);
}

export default Search;

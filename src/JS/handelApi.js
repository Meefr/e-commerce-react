const source = "https://dummyjson.com/";

export const handelApi = {
  getallData: async (endpoint, success, failed, startLoading, stopLoading) => {
    if (startLoading && typeof startLoading === "function") startLoading();

    try {
      const res = await fetch(`${source}${endpoint}`);
      if (!res.ok) {
        throw new Error("Something went wrong with the network request.");
      }
      const data = await res.json();
      if (success && typeof success === "function") success(data.products ? data.products : data );
      return data
    } catch (error) {
      console.error("Error fetching data:", error);
      if (failed && typeof failed === "function") failed(error);
    } finally {
      if (stopLoading && typeof stopLoading === "function") stopLoading();
    }
  },
};

import { Arts } from "../types";
import { useQuery } from "react-query";

export const useFetchArts = () => {
  return useQuery("arts", async () => {
    const response = await fetch(
      "https://www.rijksmuseum.nl/api/nl/collection?key=2esrTh6M&ps=9"
    );
    const parsedResponse: Arts = (await response.json()) as Arts;
    return parsedResponse.artObjects;
  });
  //   try {
  //     const response = await fetch(
  //       "https://www.rijksmuseum.nl/api/nl/collection?key=2esrTh6M&ps=9"
  //     );
  //     const parsedResponse: Arts = (await response.json()) as Arts;
  //     return parsedResponse.artObjects;
  //   } catch (error) {
  //     console.log(error);
  //     return Promise.reject(error);
  //   }
};

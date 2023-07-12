import { ArtDetails, ArtObject, Arts } from "../types";
import { useQuery } from "react-query";

export const useFetchArts = (pageNumber: number) => {
  return useQuery(["arts", pageNumber], async () => {
    const response = await fetch(
      `https://www.rijksmuseum.nl/api/nl/collection?key=2esrTh6M&p=${pageNumber}&ps=9`
    );
    const parsedResponse: Arts = (await response.json()) as Arts;
    return parsedResponse.artObjects;
  });
};

export const useFetchSingleArt = (objectId: string) => {
  return useQuery(["art", objectId], async () => {
    const response = await fetch(
      `https://www.rijksmuseum.nl/api/nl/collection/${objectId}?key=2esrTh6M`
    );
    const parsedResponse = (await response.json()) as ArtDetails;
    return parsedResponse.artObject;
  });
};

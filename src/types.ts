export interface Arts {
  elapsedMilliseconds: number;
  count: number;
  countFacets: CountFacets;
  artObjects: ArtObject[];
  facets: ArtsFacet[];
}

export interface ArtObject {
  links: Links;
  id: string;
  objectNumber: string;
  title: string;
  hasImage: boolean;
  principalOrFirstMaker: string;
  longTitle: string;
  showImage: boolean;
  permitDownload: boolean;
  webImage: Image;
  headerImage: Image;
  productionPlaces: string[];
}

export interface Image {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
}

export interface Links {
  self: string;
  web: string;
}

export interface CountFacets {
  hasimage: number;
  ondisplay: number;
}

export interface ArtsFacet {
  facets: FacetFacet[];
  name: string;
  otherTerms: number;
  prettyName: number;
}

export interface FacetFacet {
  key: string;
  value: number;
}

export interface PageChangeEvent {
  selected: number;
}
export interface PageNumberProps {
  pageNumber: number;
  checkData: (data: ArtObject[]) => void;
}

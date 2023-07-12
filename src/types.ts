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
export interface PageSetterProps {
  pageSetter: (n: number) => void;
  currentPage: number;
}

//
export interface ArtDetails {
  elapsedMilliseconds: number;
  artObject: ArtDetailsObject;
  artObjectPage: ArtObjectPage;
}

export interface ArtDetailsObject {
  links: Links;
  id: string;
  priref: string;
  objectNumber: string;
  language: string;
  title: string;
  copyrightHolder: null;
  webImage: WebImage;
  colors: Color[];
  colorsWithNormalization: ColorsWithNormalization[];
  normalizedColors: Color[];
  normalized32Colors: Color[];
  materialsThesaurus: any[];
  techniquesThesaurus: any[];
  productionPlacesThesaurus: any[];
  titles: string[];
  description: string;
  labelText: null;
  objectTypes: string[];
  objectCollection: string[];
  makers: any[];
  principalMakers: PrincipalMaker[];
  plaqueDescriptionDutch: string;
  plaqueDescriptionEnglish: string;
  principalMaker: string;
  artistRole: null;
  associations: any[];
  acquisition: Acquisition;
  exhibitions: any[];
  materials: string[];
  techniques: string[];
  productionPlaces: string[];
  dating: Dating;
  classification: Classification;
  hasImage: boolean;
  historicalPersons: any[];
  inscriptions: any[];
  documentation: string[];
  catRefRPK: any[];
  principalOrFirstMaker: string;
  dimensions: Dimension[];
  physicalProperties: any[];
  physicalMedium: string;
  longTitle: string;
  subTitle: string;
  scLabelLine: string;
  label: Label;
  showImage: boolean;
  location: string;
}

export interface Acquisition {
  method: string;
  date: Date;
  creditLine: null;
}

export interface Classification {
  iconClassIdentifier: string[];
  iconClassDescription: string[];
  motifs: any[];
  events: any[];
  periods: any[];
  places: any[];
  people: any[];
  objectNumbers: string[];
}

export interface Color {
  percentage: number;
  hex: string;
}

export interface ColorsWithNormalization {
  originalHex: string;
  normalizedHex: string;
}

export interface Dating {
  presentingDate: string;
  sortingDate: number;
  period: number;
  yearEarly: number;
  yearLate: number;
}

export interface Dimension {
  unit: string;
  type: string;
  precision: null;
  part: null;
  value: string;
}

export interface Label {
  title: string;
  makerLine: string;
  description: string;
  notes: string;
  date: Date;
}

export interface Links {
  search: string;
}

export interface PrincipalMaker {
  name: string;
  unFixedName: string;
  placeOfBirth: string;
  dateOfBirth: string;
  dateOfBirthPrecision: null;
  dateOfDeath: null;
  dateOfDeathPrecision: null;
  placeOfDeath: string;
  occupation: string[];
  roles: string[];
  nationality: string;
  biography: null;
  productionPlaces: string[];
  qualification: null;
  labelDesc: string;
}

export interface WebImage {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
}

export interface ArtObjectPage {
  id: string;
  similarPages: any[];
  lang: string;
  objectNumber: string;
  tags: any[];
  plaqueDescription: string;
  audioFile1: null;
  audioFileLabel1: null;
  audioFileLabel2: null;
  createdOn: Date;
  updatedOn: Date;
  adlibOverrides: AdlibOverrides;
}

export interface AdlibOverrides {
  titel: null;
  maker: null;
  etiketText: null;
}

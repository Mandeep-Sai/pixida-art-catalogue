import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Art from "./Art";
import { BrowserRouter } from "react-router-dom";
import { Simulate } from "react-dom/test-utils";
import { wrapperProps } from "../../types";

const sampleData = {
  elapsedMilliseconds: 0,
  count: 2,
  countFacets: {
    hasimage: 0,
    ondisplay: 0,
  },
  artObjects: [
    {
      links: {
        self: "http://www.rijksmuseum.nl/api/nl/collection/RP-P-2019-4471",
        web: "http://www.rijksmuseum.nl/nl/collectie/RP-P-2019-4471",
      },
      id: "nl-RP-P-2019-4471",
      objectNumber: "RP-P-2019-4471",
      title: "Portret van Bernard Berenson",
      hasImage: false,
      principalOrFirstMaker: "Theo Bandi, anoniem",
      longTitle: "Portret van Bernard Berenson, Theo Bandi, anoniem, 1954",
      showImage: false,
      permitDownload: true,
      webImage: null,
      headerImage: {
        guid: null,
        offsetPercentageX: 0,
        offsetPercentageY: 0,
        width: 0,
        height: 0,
        url: null,
      },
      productionPlaces: [],
    },
    {
      links: {
        self: "http://www.rijksmuseum.nl/api/nl/collection/RP-F-00-5362-41",
        web: "http://www.rijksmuseum.nl/nl/collectie/RP-F-00-5362-41",
      },
      id: "nl-RP-F-00-5362-41",
      objectNumber: "RP-F-00-5362-41",
      title:
        "Passagiersvoertuig voortgetrokken door twee ossen in Calicut, India",
      hasImage: false,
      principalOrFirstMaker: "C.C. Blackburn",
      longTitle:
        "Passagiersvoertuig voortgetrokken door twee ossen in Calicut, India, C.C. Blackburn (omgeving van), 1889",
      showImage: false,
      permitDownload: true,
      webImage: null,
      headerImage: {
        guid: null,
        offsetPercentageX: 0,
        offsetPercentageY: 0,
        width: 0,
        height: 0,
        url: null,
      },
      productionPlaces: ["Calicut"],
    },
  ],
  facets: [],
};

const mockData = { data: sampleData, isError: false, isLoading: true };

jest.mock("../../utilities/fetchData", () => ({
  useFetchSingleArt: () => {
    return mockData;
  },
}));
jest.mock("../../utilities/utils.ts", () => ({
  getDimensions: () => {
    return "dimensions";
  },
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: wrapperProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("home component", () => {
  it("show spinner when loading for data", () => {
    render(
      <BrowserRouter>
        <Art />
      </BrowserRouter>,
      { wrapper }
    );
    global.scrollTo = jest.fn();
    // const mock = jest.spyOn(Art,'getDimensions')

    const spinnerElement = screen.getAllByTestId("spinner");
    expect(spinnerElement).toBeTruthy();
  });
  it("render error when there is error while fetching data", () => {
    mockData.isError = true;
    mockData.isLoading = false;
    render(
      <BrowserRouter>
        <Art />
      </BrowserRouter>,
      { wrapper }
    );
    const ErrorElement = screen.getAllByTestId("error");
    expect(ErrorElement).toBeTruthy();
  });
  it("render content when there is data ", () => {
    mockData.isError = false;
    mockData.isLoading = false;
    mockData.data = sampleData;
    jest.mock("../../utilities/utils.ts", () => ({
      getDimensions: () => {
        return "dimensions";
      },
    }));
    render(
      <BrowserRouter>
        <Art />
      </BrowserRouter>,
      { wrapper }
    );
    const content = screen.getAllByTestId("art_content");
    expect(content).toBeTruthy();
  });

  it("should not show pagination when total items are less than items per page ", () => {
    mockData.isError = false;
    mockData.isLoading = false;
    mockData.data = sampleData;

    const { container } = render(
      <BrowserRouter>
        <Art />
      </BrowserRouter>,
      { wrapper }
    );
    const pagination = container.getElementsByClassName("pagination")[0];
    expect(pagination).toBeFalsy();
  });
});

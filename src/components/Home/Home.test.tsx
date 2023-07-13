import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

const sampleData = {
  elapsedMilliseconds: 0,
  count: 778084,
  countFacets: {
    hasimage: 594132,
    ondisplay: 8502,
  },
  artObjects: [
    {
      links: {
        self: "http://www.rijksmuseum.nl/api/nl/collection/SK-A-1718",
        web: "http://www.rijksmuseum.nl/nl/collectie/SK-A-1718",
      },
      id: "nl-SK-A-1718",
      objectNumber: "SK-A-1718",
      title: "Winterlandschap met schaatsers",
      hasImage: true,
      principalOrFirstMaker: "Hendrick Avercamp",
      longTitle: "Winterlandschap met schaatsers, Hendrick Avercamp, ca. 1608",
      showImage: true,
      permitDownload: true,
      webImage: {
        guid: "4f834f63-3aeb-48a2-8a22-bcac12ffc3b9",
        offsetPercentageX: 0,
        offsetPercentageY: 0,
        width: 2928,
        height: 1691,
        url: "https://lh3.googleusercontent.com/1pTfYJlLwVTifKj4PlsWPyAg4PcIVBAiVvB8sameSnmm7HRd056abNUIRq33rgry7u9t-ju-eHOnbfqQpK4q_8IwzIXZ4WgrqZW9l7U=s0",
      },
      headerImage: {
        guid: "c3d4cbca-a7c2-4341-812d-78773acdcb6f",
        offsetPercentageX: 0,
        offsetPercentageY: 0,
        width: 1920,
        height: 460,
        url: "https://lh3.googleusercontent.com/3R_8eX8o6uJNcIgqdMqCqJH8fPufvWZTopDEGKQgfVexy4pBCKr8C3sW3QH-KWgiuarBQxjRyuF8Xi4B4APUiv8q23v1Lk2xQA8pIg2U=s0",
      },
      productionPlaces: [],
    },
    {
      links: {
        self: "http://www.rijksmuseum.nl/api/nl/collection/SK-A-4",
        web: "http://www.rijksmuseum.nl/nl/collectie/SK-A-4",
      },
      id: "nl-SK-A-4",
      objectNumber: "SK-A-4",
      title: "De bedreigde zwaan",
      hasImage: true,
      principalOrFirstMaker: "Jan Asselijn",
      longTitle: "De bedreigde zwaan, Jan Asselijn, ca. 1650",
      showImage: true,
      permitDownload: true,
      webImage: {
        guid: "2f3951aa-bbde-4e10-bbf8-0fcb2c0ed08a",
        offsetPercentageX: 0,
        offsetPercentageY: 0,
        width: 2916,
        height: 2459,
        url: "https://lh3.googleusercontent.com/tm1DbZrAP0uBM-OJhLwvKir1Le5LglRF_bvbaNi6m-F_pIyttsWQz040soRY9pWA9PgNEYFA_fBkg_keYixRXCAjz9Q=s0",
      },
      headerImage: {
        guid: "8fb60afb-0fb2-496f-ab33-921077fc13df",
        offsetPercentageX: 0,
        offsetPercentageY: 0,
        width: 1920,
        height: 460,
        url: "https://lh3.googleusercontent.com/YwB03AMldxZhUOsLJYjKEfz5L15-WpbyvdFVctMbysr8McUY8rePhcgpIU7mJft7SOSqknEjbx55I6LnS2LC13peFUwk=s0",
      },
      productionPlaces: [],
    },
  ],
  facets: [],
};

const mockData = { data: sampleData, isError: false, isLoading: true };

jest.mock("../../utilities/fetchData", () => ({
  useFetchArts: () => {
    return mockData;
  },
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("home component", () => {
  it("show spinner when loading for data", () => {
    render(<Home />, { wrapper });
    global.scrollTo = jest.fn();
    const spinnerElement = screen.getAllByTestId("spinner");
    expect(spinnerElement).toBeTruthy();
  });
  it("render error when there is error while fetching data", () => {
    mockData.isError = true;
    mockData.isLoading = false;
    render(<Home />, { wrapper });
    const ErrorElement = screen.getAllByTestId("error");
    expect(ErrorElement).toBeTruthy();
  });
  it("render content when there is data ", () => {
    mockData.isError = false;
    mockData.isLoading = false;
    mockData.data = sampleData;
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      { wrapper }
    );
    const content = screen.getAllByTestId("home_content");
    expect(content).toBeTruthy();
  });

  it("should display No Data when data is empty ", () => {
    mockData.isError = false;
    mockData.isLoading = false;
    mockData.data = {
      elapsedMilliseconds: 0,
      count: 0,
      countFacets: {
        hasimage: 594132,
        ondisplay: 8502,
      },
      artObjects: [],
      facets: [],
    };
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      { wrapper }
    );
    const nodata = screen.getAllByTestId("nodata");
    expect(nodata).toBeTruthy();
  });
});

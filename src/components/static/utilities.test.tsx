import { getDimensions } from "../../utilities/utils";

const dimesionsData = [
  {
    unit: "cm",
    type: "hoogte",
    precision: null,
    part: null,
    value: "22,6",
  },
  {
    unit: "cm",
    type: "breedte",
    precision: null,
    part: null,
    value: "18,7",
  },
];

describe("test all utilities functions", () => {
  it("should return dimesions from data", () => {
    expect(getDimensions([...dimesionsData])).toBe(
      "hoogte 22,6 cm x breedte 18,7 cm"
    );
  });
});

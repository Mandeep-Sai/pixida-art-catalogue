import { Dimension } from "../types";

export const getDimensions = (dimensions: Dimension[]) => {
  return dimensions
    .map(
      (dimension) => `${dimension.type} ${dimension.value} ${dimension.unit}`
    )
    .join(" x ");
};

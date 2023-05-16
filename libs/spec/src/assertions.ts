import invariant from "tiny-invariant";
import warn from "tiny-warning";

export const debug: typeof warn = (...args) => {
  if (process.env.NODE_ENV === "development") {
    return warn(...args);
  }
};

export const assert: typeof invariant = (...args) => {
  if (process.env.NODE_ENV === "development") {
    return invariant(...args);
  }
};

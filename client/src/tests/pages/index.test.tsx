import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { describe, it } from "@jest/globals";
import { render, waitFor } from "@testing-library/react";
import IndexPage from "../../pages";
import { mockUseStaticQuery, useStaticQuery } from "../__mocks__/graphql";

describe("Index", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  it("renders correctly", () => {
    const page = render(<IndexPage />);
    expect(page).toMatchSnapshot();
  });

  it("contains the title", () => {
    const page = render(<IndexPage />);
    expect(page.getByTestId("title")).toBeInTheDocument();
  });

  it("contains the fact", async () => {
    const { getByTestId } = render(<IndexPage />);
    await waitFor(() => expect(getByTestId("fact")).toBeInTheDocument());
  });

  it("changes the fact when the button is pressed", async () => {
    const { getByTestId } = render(<IndexPage />);
    await waitFor(() => expect(getByTestId("fact")).toBeInTheDocument());
    const oldFact = getByTestId("fact").innerHTML;
    getByTestId("new-fact-button").click();
    await waitFor(() => expect(getByTestId("loading")).toBeInTheDocument());
    await waitFor(() => expect(getByTestId("fact")).toBeInTheDocument());
    const newFact = getByTestId("fact").innerHTML;
    expect(oldFact).not.toEqual(newFact);
  });
});

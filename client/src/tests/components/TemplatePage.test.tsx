import React from "react";
import { render } from "@testing-library/react";
import TemplatePage from "../../components/TemplatePage";
import {
  mockUseStaticQuery,
  title,
  useStaticQuery,
} from "../__mocks__/graphql";

describe("TemplatePage", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  it("renders correctly", () => {
    const page = render(<TemplatePage />);
    expect(page).toMatchSnapshot();
  });

  it("has the correct header", () => {
    const { getByTestId } = render(<TemplatePage />);
    const links = getByTestId("header").getElementsByTagName("a");
    expect(links.length).toEqual(2);
    expect(links[0].innerHTML).toEqual("Cats");
    expect(links[1].innerHTML).toEqual("Dogs");
  });

  it("has the correct footer", () => {
    const { getByTestId } = render(<TemplatePage />);
    expect(getByTestId("footer").innerHTML).toEqual(
      `${title} - ${new Date().getFullYear()}`
    );
  });
});

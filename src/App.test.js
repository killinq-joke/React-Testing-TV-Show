import React from "react";
import App from "./App";
import * as rtl from "@testing-library/react";

jest.mock("axios", () => {
  return {
    get: jest.fn(() =>
      Promise.resolve({
        data: {
          id: NaN,
          url: "",
          name: "Oblipo",
          type: "",
          language: "",
          genres: [],
          status: "",
          runtime: NaN,
          premiered: "",
          officialSite: "",
          schedule: {},
          rating: {},
          weight: NaN,
          network: null,
          webChannel: {},
          externals: {},
          image: {},
          summary: "<p>the cup of bromman is reallly bigggg</p>",
          updated: NaN,
          links: {},
          _embedded: {episodes:[{season: 1}, {season: 1}, {season: 2}, {season: 2}]}
        }
      })
    )
  }
})

  describe("App", () => {
    afterEach(rtl.cleanup);
    let wrapper;
    beforeEach(() => {
      wrapper = rtl.render(<App />);
    });

  it("displays the dropdown menu",  () => {
    const dropdown = wrapper.getByText(/select a season/i);
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toBeVisible();
    
  });
  it("displays the info", () => {
      const title = wrapper.queryByText(/oblipo/i)
      expect(title).toBeInTheDocument();
      expect(title).toBeVisible();
      const summary = wrapper.queryByText(/the cup of bromman is reallly bigggg/i)
      expect(summary).toBeInTheDocument();
      expect(summary).toBeVisible();
  })
});

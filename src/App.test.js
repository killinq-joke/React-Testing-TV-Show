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
          name: "",
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
          summary: "",
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

    // it("spinner renders", () => {
    //     const spinner = wrapper.queryByText(/fetching data.../i)
    //     expect(spinner).toBeInTheDocument();
    // })
    // });
  it("displays the dropdown menu", async () => {
    const dropdown = await wrapper.getByText(/select a season/i);
    expect(dropdown).toBeInTheDocument();
  });
});

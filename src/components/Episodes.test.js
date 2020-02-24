import React from "react";
import Episodes from "./Episodes";
import * as rtl from "@testing-library/react";

describe("Episodes", () => {
  afterEach(rtl.cleanup);
  let wrapper;
  const episodes = [
    {
      id: 553946,
      url:
        "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
      name: "Chapter One: The Vanishing of Will Byers",
      season: 1,
      number: 1,
      airdate: "2016-07-15",
      airtime: "",
      airstamp: "2016-07-15T12:00:00+00:00",
      runtime: 60,
      summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>"
    }
  ];
  beforeEach(() => {
    wrapper = rtl.render(<Episodes episodes={episodes} />);
  });

  it("renders", () => {
    const episode = wrapper.queryByText(/episode/i);
    expect(episode).toBeInTheDocument();
    expect(episode).toBeVisible();
  });
  it("renders the info", () => {
    const season1 = wrapper.queryByText(/season 1/i);
    expect(season1).toBeInTheDocument();
    expect(season1).toBeVisible();
    const episode1 = wrapper.queryByText(/episode 1/i);
    expect(episode1).toBeInTheDocument();
    expect(episode1).toBeVisible();
    const name = wrapper.queryByText(/chapter one: the vanishing of will byers/i)
    expect(name).toBeInTheDocument();
    expect(name).toBeVisible();
    const notName = wrapper.queryByText(/chapter two: the vanishing of will byers/i)
    expect(notName).not.toBeInTheDocument();
    const summary = wrapper.queryByText(/A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest./i)
    expect(summary).toBeInTheDocument();
    expect(summary).toBeVisible();
  })
});

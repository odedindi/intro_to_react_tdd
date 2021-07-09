import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("renders hello tests", () => {
  render(<App />);
  const linkElement = screen.getByText("Hello tests");
  expect(linkElement).toBeInTheDocument();
});

test("button starts as disabled but as input is entered in the input field it should become active", () => {
  render(<App />);
  const searchButton = screen.getByRole("button");
  expect(searchButton).toBeDisabled();
  fireEvent.change(screen.getByTestId("myInput"), {
    target: { value: "some text" },
  });
  expect(searchButton).not.toBeDisabled();
});

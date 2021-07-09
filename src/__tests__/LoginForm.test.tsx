import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "../components/LoginForm";

test("renders ah", () => {
  render(<LoginForm />);
  const linkElement = screen.getByText("ah");
  expect(linkElement).toBeInTheDocument();
});

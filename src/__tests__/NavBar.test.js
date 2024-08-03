// src/__tests__/NavBar.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("renders two <a> elements inside the <nav> element", () => {
  render(<NavBar />);
  const nav = screen.getByRole('navigation');

  const anchorTags = screen.getAllByRole('link');
  expect(anchorTags).toHaveLength(2);
});

test("renders each <a> element with the correct attributes", () => {
  render(<NavBar />);

  const home = screen.getByText(/home/i);
  expect(home).toBeInTheDocument();
  expect(home).toHaveAttribute("href", "#home");

  const about = screen.getByText(/about/i);
  expect(about).toBeInTheDocument();
  expect(about).toHaveAttribute("href", "#about");
});



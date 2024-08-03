// src/__tests__/About.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("renders a <div> with the ID of 'about'", () => {
  render(<About />);
  const aboutDiv = screen.getByTestId("about");
  expect(aboutDiv).toBeInTheDocument();
  expect(aboutDiv).toHaveAttribute("id", "about");
});

test("the <div> has three child elements", () => {
  render(<About />);
  const aboutDiv = screen.getByTestId("about");
  expect(aboutDiv.children).toHaveLength(3);
});

test("renders a <h2> with the text 'About Me'", () => {
  render(<About />);
  // Use getByRole to specifically query for <h2> elements
  const h2 = screen.getByRole('heading', { name: /About Me/i });
  expect(h2).toBeInTheDocument();
  expect(h2.tagName).toBe("H2");
});

test("renders a <p> element with the text 'Some information about me'", () => {
  render(<About />);
  const p = screen.getByText(/Some information about me/i);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});

test("renders a <img> element with the correct attributes", () => {
  render(<About />);
  const img = screen.getByAltText("I made this");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", "some-image.jpg");
});

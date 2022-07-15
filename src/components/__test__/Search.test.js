import { render, screen } from "@testing-library/react";

import Search from "../Search";

test("search input renders", () => {
  render(<Search />);
  const inputElement = screen.getByPlaceholderText(/Search City/i);
  console.log(inputElement);
  expect(inputElement).toBeInTheDocument();
});

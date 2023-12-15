import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { test } from "vitest";
import "@testing-library/jest-dom";

const server = setupServer(
  http.get("https://swapi.dev/api/people", () => {
    return HttpResponse.json({ to: "do" });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders the title", async () => {
  console.log("started");
  render(<App />);
  const title = screen.getByText(
    "Testing API calls in React with the Star Wars API"
  );
  expect(title).toBeInTheDocument();
});

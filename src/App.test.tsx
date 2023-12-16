import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { test, describe } from "vitest";
import "@testing-library/jest-dom";

const server = setupServer(
  http.get("https://swapi.dev/api/people", () => {
    return HttpResponse.json({
      results: [
        {
          name: "Luke Skywalker",
        },
      ],
    });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  test("renders the title", () => {
    render(<App />);
    const title = screen.getByText(
      "Testing API calls in React with the Star Wars API"
    );
    expect(title).toBeInTheDocument();
  });

  test("fetches the first name from the list", async () => {
    render(<App />);
    const name = await screen.findByText("Luke Skywalker");
    expect(name).toBeInTheDocument();
  });
});

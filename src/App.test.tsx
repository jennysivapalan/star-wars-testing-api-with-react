import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { test, describe } from "vitest";
import "@testing-library/jest-dom";

const validResponse = http.get("https://swapi.dev/api/people", () =>
  HttpResponse.json({
    results: [
      {
        name: "Luke Skywalker",
      },
    ],
  })
);

const errorResponse = http.get("https://swapi.dev/api/people", () => {
  return new HttpResponse(null, {
    status: 500,
    statusText: "Alas the force is not with you",
  });
});

const server = setupServer();

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
    server.use(validResponse);
    render(<App />);
    const name = await screen.findByText("Luke Skywalker");
    expect(name).toBeInTheDocument();
  });

  test("returns an error message for 500 error", async () => {
    server.use(errorResponse);
    render(<App />);

    const errorMessage = await screen.findByText(
      "Oops... something went wrong, try again 🤕"
    );
    expect(errorMessage).toBeInTheDocument();
  });
});

import { describe, test } from "vitest";
import { render, screen} from '@testing-library/react';
import { CountryPost } from "./";
import "@testing-library/jest-dom";

describe("Accordion test", () => {
  test("should show title all the time", () => {
    render(
      <CountryPost
        flagImg={"https://flagcdn.com/w320/ar.png"}
        name={"Argentine Republic"}
        population={"45376763"}
        region={"Americas"}
        capital={"Buenos Aires"}
        code={"ARG"}
      />
    );
    expect(screen.getByText(/Argentine Republic/i)).toBeDefined();
  });
});

import { test, expect, describe } from "vitest";
import ErrorMessage from "../src/components/ErrorMessage";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("ErrorMessage", () => {
  test("renders the error message when message prop is provided", () => {
    render(<ErrorMessage message="Something went wrong" onClose={() => {}} />);

    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();

    const messageElement = screen.getByText("Something went wrong");
    expect(messageElement).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: "✕" });
    expect(closeButton).toBeInTheDocument();
  });

  test("does not render when message prop is empty", () => {
    const { container } = render(<ErrorMessage message={""} onClose={() => {}} />);

    expect(container).toBeEmptyDOMElement();
  });
});
import { test, expect, describe } from "vitest";
import ProductList from "../src/components/ProductList";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";

describe("ProductList", () => {
  test("renders heading and product cards", () => {
    const products = [
      {
        id: 1,
        name: "Retro Lamp",
        price: 20,
        image: "lamp.png",
      },
    ];

    render(
      <MemoryRouter>
        <ProductList products={products} />
      </MemoryRouter>
    );

    const heading = screen.getByText(/products/i);
    expect(heading).toBeInTheDocument();

    const productName = screen.getByText("Retro Lamp");
    expect(productName).toBeInTheDocument();

    const priceElement = screen.getByText("$20");
    expect(priceElement).toBeInTheDocument();

    const viewDetailsButton = screen.getByText(/view details/i);
    expect(viewDetailsButton).toBeInTheDocument();
  });

  test("shows Add to Cart button when addToCart is provided", () => {
    const products = [
      {
        id: 2,
        name: "Vintage Chair",
        price: 45,
        image: "chair.png",
      },
    ];

    render(
      <MemoryRouter>
        <ProductList products={products} addToCart={() => {}} />
      </MemoryRouter>
    );

    const addButton = screen.getByText(/add to cart/i);
    expect(addButton).toBeInTheDocument();
  });
});
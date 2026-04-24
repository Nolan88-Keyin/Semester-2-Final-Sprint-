import { test, expect, describe } from "vitest";
import Cart from "../src/components/Cart";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

const cartItems = [
  {
    id: 1,
    name: "Test Product",
    price: 10,
    quantity: 2,
    stock: 5,
    image: "test.jpg",
  },
];

describe("Cart", () => {
  test("shows empty cart message when no items exist", () => {
    render(
      <Cart
        cart={[]}
        increaseQuantity={() => {}}
        decreaseQuantity={() => {}}
        removeFromCart={() => {}}
      />
    );

    const emptyMessage = screen.getByText(/your cart is empty/i);
    expect(emptyMessage).toBeInTheDocument();

    const totalElement = screen.getByText(/total:/i);
    expect(totalElement).toBeInTheDocument();
  });

  test("renders cart items", () => {
    render(
      <Cart
        cart={cartItems}
        increaseQuantity={() => {}}
        decreaseQuantity={() => {}}
        removeFromCart={() => {}}
      />
    );

    const productName = screen.getByText("Test Product");
    expect(productName).toBeInTheDocument();

    const priceElement = screen.getByText("Price: $10");
    expect(priceElement).toBeInTheDocument();

    const quantityElement = screen.getByText("Quantity: 2");
    expect(quantityElement).toBeInTheDocument();

    const stockElement = screen.getByText("Stock Available: 5");
    expect(stockElement).toBeInTheDocument();

    const increaseButton = screen.getByText("+");
    expect(increaseButton).toBeInTheDocument();

    const decreaseButton = screen.getByText("-");
    expect(decreaseButton).toBeInTheDocument();

    const removeButton = screen.getByText(/remove/i);
    expect(removeButton).toBeInTheDocument();
  });
});
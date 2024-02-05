import React from "react";
import ReactDOM from "react-dom/client";

const e = React.createElement;

const App = () => {
  return e(
    "div",
    { id: "app" },
    e(
      "main",
      null,
      e("div", {
        className: "product-listing",
        children: [
          e("h2", null, "Products"),
          e("ul", {
            className: "product-list",
            children: [
              e(Product, {
                name: "Amazon Kindle E-Reader",
                price: "$79.99",
                qty: 5,
              }),
              e(Product, {
                name: "Apple 10.5-Inch iPad Pro",
                price: "$649.99",
                qty: 2,
              }),
              e(Product, {
                name: "Yamaha Portable Keyboard",
                price: "$155.99",
                qty: 0,
              }),
            ],
          }),
        ],
      }),
    ),
  );
};

const Product = ({ name, price, qty }) => {
  return e("li", {
    className: "product",
    children: e("div", {
      className: "product-details",
      children: [
        e("h3", null, name),
        e("p", { className: "price" }, price),
        e("p", { className: "quantity" }, `${qty} left in stock`),
        e("div", {
          className: "actions product-actions",
          children: [
            e("button", { className: "add-to-cart" }, "Add to Cart"),
            e("button", { className: "edit" }, "Edit"),
          ],
        }),
        e("button", { className: "delete-button" }, e("span", null, "X")),
      ],
    }),
  });
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(e(App));

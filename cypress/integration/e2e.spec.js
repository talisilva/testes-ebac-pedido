/// <reference types="cypress" />

const perfil = require("../fixtures/perfil.json");
const checkout = require("../fixtures/checkout.json");
const faker = require("faker");
import CheckoutPage from "../support/page_objects/checkout.page";

context("Exercicio - Testes End-to-end - Fluxo de pedido", () => {
  beforeEach(() => {
    cy.visit("/");
  });

    it("Deve adicionar um produto", () => {
    cy.addProdutos("Taurus Elements Shell",  "XS", "Blue", 5);

    it("Deve adicionar um produto", () => {
      cy.addProdutos("Circe Hooded Ice Fleece",  "XS","Gray", 1);

    it("Deve adicionar um produto", () => {
        cy.addProdutos("Caesar Warm-Up Pant", "34", "Gray",3);

  
            cy.get("#cart > .dropdown-toggle").click();
            cy.get(
              "#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart"
            ).click();
            cy.get(".checkout-button").click();
            CheckoutPage.criandoCheckout(
              "Talisa",
              "Silva",
              "Brazil",
              "Rua General Osório",
              "Santo André",
              "São Paulo",
              "09190440",
              "11977936600",
              faker.internet.email(),
              "Tata2014*"
            );
            cy.get(".woocommerce-notice").should(
              "contain",
              "Obrigado. Seu pedido foi recebido."
            );
          });
        });
      });
    });

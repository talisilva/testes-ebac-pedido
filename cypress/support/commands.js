// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});


Cypress.Commands.add('checkout', (nome, sobrenome, pais, endereço, cidade, estado, CEP, telefone, email, senha) => {
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').type(   pais).click()
    cy.get('#billing_address_1').type(endereço)
    cy.get('#billing_city').type(cidade)
    cy.get('#select2-billing_state-container').type(estado).click()
    cy.get('#billing_postcode').type(CEP)
    cy.get('#billing_phone').type(telefone)
  
});

Cypress.Commands.add('addProduto1', () => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(7) > .page-numbers').click()
    cy.get('.post-2811 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '“Taurus Elements Shell” foi adicionado no seu carrinho.')
  
});

Cypress.Commands.add('addProduto2', () => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(3) > .page-numbers').click()
    cy.get('.post-4028 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Gray').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '“Circe Hooded Ice Fleece” foi adicionado no seu carrinho.')

});

Cypress.Commands.add('addProduto3', () => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.next').click()
    cy.get('.post-2900 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    cy.get('.button-variable-item-34').click()
    cy.get('.button-variable-item-Gray').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '“Caesar Warm-Up Pant” foi adicionado no seu carrinho.')
});


Cypress.Commands.add('addProduto4', () => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(3) > .page-numbers').click()
    cy.get('.post-3686 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    cy.get('.button-variable-item-M').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '“Cassius Sparring Tank” foi adicionado no seu carrinho.')
});   
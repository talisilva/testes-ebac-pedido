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


Cypress.Commands.add('addProdutos', (quantidade) => {
    //Jaqueta
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(7) > .page-numbers').click()
    cy.contains('Taurus Elements Shell').click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', quantidade,'“Taurus Elements Shell” foi adicionado no seu carrinho.'),
    //Jaqueta
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(3) > .page-numbers').click()
    cy.contains('Circe Hooded Ice Fleece').click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Gray').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', quantidade, '“Circe Hooded Ice Fleece” foi adicionado no seu carrinho.')
    //Calça
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.next').click()
    cy.contains('Caesar Warm-Up Pant').click()
    cy.get('.button-variable-item-34').click()
    cy.get('.button-variable-item-Gray').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', quantidade, '“Caesar Warm-Up Pant” foi adicionado no seu carrinho.')
    //Camiseta
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(3) > .page-numbers').click()
    cy.contains('Cassius Sparring Tank').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', quantidade, '“Cassius Sparring Tank” foi adicionado no seu carrinho.')
});   
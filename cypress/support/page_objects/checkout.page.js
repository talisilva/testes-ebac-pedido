class CheckoutCadastro 

{


    criandoCheckout(nome, sobrenome, pais, endereço, cidade, estado, CEP, telefone, email, senha){
       
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').type(   pais).click()
        cy.get('#billing_address_1').type(endereço)
        cy.get('#billing_city').type(cidade)
        cy.get('#select2-billing_state-container').type(estado).click()
        cy.get('#billing_postcode').type(CEP)
        cy.get('#billing_phone').type(telefone)
        cy.get('#billing_email').type(email)
        cy.get('#createaccount').click()
        cy.get('#account_password').type(senha,{log:false})
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.wait(5000)
        
    }

}

export default new CheckoutCadastro()
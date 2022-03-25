/// <reference types="Cypress" />

describe('login de usuarios alura pic', () => {


    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')

        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400 //usando mocks, para quebrar o teste que estava passando
        }).as('stubPost')   //forçando um statusCode 400
    })

    it('fazer login de usuario valido', () =>{
       cy.login(Cypress.env('userName'), Cypress.env('password'))
       cy.wait('@stubPost')//falando pra esperar a rota caregar, porque ela vai dar 400
        cy.contains('a', '(Logout)').should('be.visible')

    })
it.only('fazer login de usuario invalido', () =>{
cy.login('jaqueline', '1234')
cy.on ('window:alert', (str) => {
    expect(str).to.equal('Invalid user name or password')
})
})

});
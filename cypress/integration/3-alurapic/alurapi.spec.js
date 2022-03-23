/// <reference types="Cypress" />

describe('login com sussesso', () => {


    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')

    })



    it('Verifica mensagens de validacao', () => {

        cy.contains('a','Register now').click()
        cy.contains('button','Register').click()
        cy.contains('ap-vmessage','Email is required!').should('be.visible')
        cy.contains('button','Register').click()
        cy.contains('ap-vmessage','Full name is required!').should('be.visible')
        cy.contains('ap-vmessage','User name is required!').should('be.visible')
        cy.contains('ap-vmessage','Password is required!').should('be.visible')

})

it('Verifica mensagens de email invalido', () => {

    cy.contains('a','Register now').click()
    cy.contains('button','Register').click()
    cy.get('input[formcontrolname="email"]').type('edsonlucas')
    cy.contains('ap-vmessage','Invalid e-mail').should('be.visible')
   
})

it('Verifica mensagens de senha com menos de 8 caracteres', () => {

    cy.contains('a','Register now').click()
    cy.contains('button','Register').click()
    cy.get('input[formcontrolname="password"]').type('1234')
    cy.contains('button','Register').click()
    cy.contains('ap-vmessage','Mininum length is 8').should('be.visible')
   
})

})
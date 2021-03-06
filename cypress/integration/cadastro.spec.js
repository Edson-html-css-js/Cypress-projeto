describe('cadastro de usuarios alura pic', () => {


    beforeEach(() => {
        cy.visit('/')

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

const usuarios = require('../fixtures/usuarios.json')
usuarios.forEach(usuarios => {
    it.only(`registra novo usuário ${usuarios.userName}` , () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="email"]').type(usuarios.email)
        cy.get('input[formcontrolname="fullName"]').type(usuarios.fullName)
        cy.get('input[formcontrolname="userName"]').type(usuarios.userName)
        cy.get('input[formcontrolname="password"]').type(usuarios.password)
        cy.contains('button', 'Register').click()
    })
});
});
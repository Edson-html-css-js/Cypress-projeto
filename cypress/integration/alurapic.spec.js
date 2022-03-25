/// <reference types="Cypress" />

describe('login com sussesso', () => {


    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')

    })



    it('Verifica mensagens de validacao', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java')
        cy.get('.header-barraBusca-form-submit').click()
        cy.get('h4.busca-resultado-nome').should('contain', 'Formação Java e Orientação a Objetos')

    })

})
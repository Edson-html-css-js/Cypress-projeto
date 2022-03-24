/// <reference types="Cypress" />

describe('Buscar fotos e dados', ()=> {

    it.only('buscar fotos do flavio', ()=> {
        const tempoEsperado = Math.random() * 4000;
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
           expect(res.status).to.be.equal(200)
           expect(res.body).is.not.empty
           expect(res.body[0]).to.have.property('description')
           expect(res.body[0].description).to.be.equal('Farol iluminado') 
           expect(res.duration).to.be.lte(tempoEsperado)//lte siguinifica que o teste rode ne um tempo menor que o tempo passado na const
                //exemplo de test flaky, uma hora passa outra não, por conta do tempo setado na const!
        })
    })


    it('fazer login do flavio', ()=> {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((res) => {
           expect(res.status).to.be.equal(200)
           expect(res.body).is.not.empty
           expect(res.body).to.have.property('id')
           expect(res.body.id).to.be.equal(1) 
           expect(res.body).to.have.property('email')
           expect(res.body.email).to.be.equal("flavio@alurapic.com.br") 
        }

        )
    })

})
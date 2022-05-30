/// <reference types="Cypress" />

describe('Test Suite for TODO List', () => {
   
    
    it('Should navigate to TODO App', () => {

        cy.visit('http://todomvc-app-for-testing.surge.sh/')

    })

    it('Should be able to add a new item into TODO List', () => {

        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo', {timeout: 6000}).type('Complete the Course{enter}')
        cy.get('.toggle').click()
        cy.contains('Clear').click()

    })

})


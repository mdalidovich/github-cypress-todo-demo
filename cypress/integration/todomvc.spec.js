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

    it('Label should have correct text, be unchecked, correct css', () => {

        cy.visit('http://todomvc-app-for-testing.surge.sh/')

        cy.get('.new-todo').type('Complete the Course{enter}')
        cy.get('label').should('have.text', 'Complete the Course')
        cy.get('.toggle').should('not.be.checked')
        cy.get('.toggle').click()
        cy.get('label')
        .should('have.css', 'text-decoration-line', 'line-through')
        .and('have.css', 'font-size', '24px')
        .and('have.css', 'text-align', 'left')
        .and('have.css', 'text-decoration-color', 'rgb(217, 217, 217)')

        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')

    })

})


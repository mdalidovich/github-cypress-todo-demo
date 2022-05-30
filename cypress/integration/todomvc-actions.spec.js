/// <reference types="Cypress" />

describe('Test Suite for TODO List actions', () => {
   
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type('Complete the Course{enter}')
        //with timeout as example
        //cy.get('.new-todo', {timeout: 6000}).type('Complete the Course{enter}')
    })
    
    it('Should have correct text and then be unchecked', () => {
               
        cy.get('label').should('have.text', 'Complete the Course')
        cy.get('.toggle').should('not.be.checked')

    })

   
    it('Should have correct css', () => {
        
        cy.get('.toggle').click()
        cy
            .get('label')
            .should('have.css', 'text-decoration-line', 'line-through')
            .and('have.css', 'font-size', '24px')
            .and('have.css', 'text-align', 'left')
            .and('have.css', 'text-decoration-color', 'rgb(217, 217, 217)')

    })

    it('Should mark todo as completed', () => {
        
        cy.get('.toggle').click()
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')

    })
    
})


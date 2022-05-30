/// <reference types="Cypress" />
import { TodoPage } from "../pageObjects/todo-page"

describe('Test Suite for TODO List actions', () => {

    const todoPage = new TodoPage()
   
    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo('Complete the Course')
        
        //with timeout as example
        //cy.get('.new-todo', {timeout: 6000}).type('Complete the Course{enter}')
    })
    
    it('Should have correct text and then be unchecked', () => {
               
        todoPage.validateTodoTxt(0, "Complete the Course")
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


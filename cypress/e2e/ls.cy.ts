import { validCommands } from '../../src/constants/commands'

describe('test ls command', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should give error response if args are provided', () => {
        cy.get('[data-testid="command-input"]').type('ls extra-arg {enter}')
        cy.get('[data-testid="error-response"]').should('exist').and('contain', 'ls: extra operand')
    })

    it('should give correct response if no args are provided', () => {
        cy.get('[data-testid="command-input"]').type('ls{enter}')
        cy.get('[data-testid="valid-response"]')
            .should('exist')
            .within(() => {
                //add 2 because the container and the old command
                cy.get('div').should('have.length', validCommands['cat'].validArgs.length + 2)
            })
    })
})

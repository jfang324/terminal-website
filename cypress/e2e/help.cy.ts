import { validCommands } from '../../src/constants/commands'

describe('test help command', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should give error response if args are provided', () => {
        cy.get('[data-testid="command-input"]').type('help extra-arg {enter}')
        cy.get('[data-testid="error-response"]').should('exist').and('contain', 'help: extra operand')
    })

    it('should give correct response if no args are provided', () => {
        cy.get('[data-testid="command-input"]').type('help{enter}')
        cy.get('[data-testid="valid-response"]')
            .should('exist')
            .within(() => {
                //add 2 because the container and the old command
                cy.get('div').should('have.length', Object.keys(validCommands).length + 2)
                for (const command of Object.keys(validCommands)) {
                    cy.contains(command)
                }
            })
    })
})

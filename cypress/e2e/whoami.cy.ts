import { whoami } from '../../src/constants/content'

describe('test whoami command', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should give error response if args are provided', () => {
        cy.get('[data-testid="command-input"]').type('whoami extra-arg {enter}')
        cy.get('[data-testid="error-response"]').should('exist').and('contain', 'whoami: extra operand')
    })

    it('should give correct response if no args are provided', () => {
        cy.get('[data-testid="command-input"]').type('whoami{enter}')
        cy.get('[data-testid="valid-response"]').should('exist').and('contain', whoami)
    })
})

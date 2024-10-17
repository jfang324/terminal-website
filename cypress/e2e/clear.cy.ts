describe('test clear command', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should give error response if args are provided', () => {
        cy.get('[data-testid="command-input"]').type('clear extra-arg {enter}')
        cy.get('[data-testid="error-response"]').should('exist').and('contain', 'clear: extra operand')
    })

    it('should clear the welcome message and responses', () => {
        cy.get('[data-testid="command-input"]').type('ls{enter}')
        cy.get('[data-testid="valid-response"]').should('exist')

        cy.get('[data-testid="command-input"]').type('clear{enter}')

        cy.get('[data-testid="valid-response"]').should('not.exist')
        cy.get('[data-testid="welcome-message"]').should('not.exist')
    })
})

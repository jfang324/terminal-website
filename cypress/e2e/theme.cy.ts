describe('test theme command', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should give error response if input contains unsupported theme', () => {
        const unsupportedTheme = 'unsupported-theme'
        cy.get('[data-testid="command-input"]').type(`theme ${unsupportedTheme}{enter}`)
        cy.get('[data-testid="error-response"]')
            .should('exist')
            .and('contain', `theme: ${unsupportedTheme}: theme not supported`)
    })

    it('should give error response if no args are provided', () => {
        cy.get('[data-testid="command-input"]').type('theme{enter}')
        cy.get('[data-testid="error-response"]').should('exist').and('contain', 'theme: missing operand')
    })

    it('should toggle themes', () => {
        cy.get('[data-testid="command-input"]').type(`theme light{enter}`)
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('[data-testid="command-input"]').type(`theme dark{enter}`)
        cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)')
    })
})

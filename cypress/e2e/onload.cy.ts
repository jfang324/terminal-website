import { welcomeMessage } from '../../src/constants/content'

describe('test landing page load', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should display the welcome message', () => {
        cy.get('[data-testid="welcome-message"]').should('exist').and('contain', welcomeMessage)
    })

    it('should focuses on the secret input', () => {
        cy.get('[data-testid="command-input"]').should('exist').and('be.focused')
    })

    it('should be dark theme', () => {
        cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)')
    })
})

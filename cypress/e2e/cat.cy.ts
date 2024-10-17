import { cat } from '../../src/constants/content'

describe('test cat command', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should give error response if input contains unsupported file', () => {
        const unsupportedFile = 'unsupported-file'
        cy.get('[data-testid="command-input"]').type(`cat ${unsupportedFile}{enter}`)
        cy.get('[data-testid="error-response"]')
            .should('exist')
            .and('contain', `cat: ${unsupportedFile}: no such file or directory`)
    })

    it('should give error response if no args are provided', () => {
        cy.get('[data-testid="command-input"]').type(`cat{enter}`)
        cy.get('[data-testid="error-response"]')
            .should('exist')
            .and('contain', `cat: undefined: no such file or directory`)
    })

    it('should display skills when called with skills.txt', () => {
        cy.get('[data-testid="command-input"]').type(`cat skills.txt{enter}`)
        cy.get('[data-testid="valid-response"]')
            .should('exist')
            .within(() => {
                const categories = Object.keys(cat['skills.txt'])
                for (const category of categories) {
                    const skills = cat['skills.txt'][category as keyof (typeof cat)['skills.txt']]
                    cy.get('div').should('contain', `${category}: ${skills.join(', ')}`)
                }
            })
    })

    it('should display projects when called with projects.txt', () => {
        cy.get('[data-testid="command-input"]').type(`cat projects.txt{enter}`)
        cy.get('[data-testid="valid-response"]')
            .should('exist')
            .within(() => {
                const projects = Object.keys(cat['projects.txt'])
                for (const project of projects) {
                    cy.contains('a', project)
                        .should('have.attr', 'href')
                        .and('include', cat['projects.txt'][project as keyof (typeof cat)['projects.txt']])
                }
            })
    })

    it('should display contacts when called with contacts.txt', () => {
        cy.get('[data-testid="command-input"]').type(`cat contacts.txt{enter}`)
        cy.get('[data-testid="valid-response"]')
            .should('exist')
            .within(() => {
                const contacts = Object.keys(cat['contacts.txt'])
                for (const contact of contacts) {
                    cy.contains('div', contact).should(
                        'contain',
                        cat['contacts.txt'][contact as keyof (typeof cat)['contacts.txt']]
                    )
                }
            })
    })
})

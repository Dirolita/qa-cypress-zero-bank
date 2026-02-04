/**
 * Test Scenario: TS-NAV-001
 * User Story: US-004
 * Acceptance Criteria: AC-NAV-01
 * Type: Functional / Usability
 */
describe('Navigation - Main sections navigation', () => {
    
    beforeEach(() => {
        // Log in once before each navigation check
        cy.visit('/')
        cy.login('username', 'password')
        cy.url().should('include', '/bank/account-summary.html')
    })

    const menuItems = [
        { name: 'Account Summary', url: '/bank/account-summary.html' },
        { name: 'Account Activity', url: '/bank/account-activity.html' },
        { name: 'Transfer Funds', url: '/bank/transfer-funds.html' },
        { name: 'Pay Bills', url: '/bank/pay-bills.html' },
        { name: 'My Money Map', url: '/bank/money-map.html' },
        { name: 'Online Statements', url: 'statements.html' }
    ]

    menuItems.forEach((item) => {
        it(`Should navigate to the menu section: ${item.name}`, () => {
            // Find the link by text and click it
            cy.contains('a', item.name).click()
            
            // Assert the URL is correct
            cy.url().should('include', item.url)
        })
    })
})
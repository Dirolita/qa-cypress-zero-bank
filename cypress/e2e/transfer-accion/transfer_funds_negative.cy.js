/**
 * Test Scenario: TS-TRF-002
 * User Story: US-006
 * Acceptance Criteria: AC-TRF-01, AC-TRF-02
 * Type: Functional /Negative
 */

describe('Transfer Funds - Transfer Funds negative test', () => {
    beforeEach(() => {
        // Log in once before each navigation check
        cy.visit('/')
        cy.login('username', 'password')
        cy.url().should('include', '/bank/account-summary.html')
        cy.contains('Transfer Funds').click()
    })
    it('Should show error for negative transfer amount', () => {
        // Fill transfer form with negative amount
        cy.get('#tf_fromAccountId').select(1)
        cy.get('#tf_toAccountId').select(2)
        cy.get('#tf_amount').type('-50')
        cy.get('#tf_description').type('Negative amount test')
        cy.get('#btn_submit').click()
        cy.screenshot('BUG-TRF-001-negative-amount')
        cy.contains('Please enter a positive value for the field "Amount"').should('be.visible')
})
})
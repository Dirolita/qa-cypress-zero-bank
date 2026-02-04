/**
 * Test Scenario: TS-TRF-001
 * User Story: US-006
 * Acceptance Criteria: AC-TRF-01, AC-TRF-02
 * Type: Functional / Positive and Negative
 */

describe('Transfer Funds - Transfer Funds page navigation', () => {
    beforeEach(() => {
        // Log in once before each navigation check
        cy.visit('/')
        cy.login('username', 'password')
        cy.url().should('include', '/bank/account-summary.html')
        cy.contains('Transfer Funds').click()
    })
    it('Should complete a transfer successfully - happy path', () => {
    // Fill transfer form, select values
    cy.get('#tf_fromAccountId').select(1)
    cy.get('#tf_toAccountId').select(2)
    cy.get('#tf_amount').type('100')
    cy.get('#tf_description').type('Test transfer')

    // Step 1: Continue
    cy.get('#btn_submit').click()

    // Assert: verify transfer page
    cy.contains('Transfer Money & Make Payments - Verify').should('be.visible')

    // Step 2: Confirm transfer
    cy.get('#btn_submit').click()

    // Assert: success message
    cy.contains('You successfully submitted your transaction.')
      .should('be.visible')
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
/**
 * Test Scenario: TS-SEC-001
 * User Story: US-005
 * Acceptance Criteria: AC-SEC-01
 * Type: Security / Negative
 */

describe('Security - Access protected URL without authentication', () => {

  it('Should redirect unauthenticated user to login page', () => {

    // Act: direct access to protected resource
    cy.visit('/bank/account-summary.html')

    // Assert: redirected to login
    cy.url().should('include', 'login.html')

    // Assert: login form is displayed
    cy.get('#user_login').should('be.visible')
    cy.get('#user_password').should('be.visible')

    // Assert: protected content is NOT visible
    cy.contains('Account Summary').should('not.exist')
  })

})

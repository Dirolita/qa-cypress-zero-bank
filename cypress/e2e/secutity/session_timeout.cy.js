/**
 * Test Scenario: TS-SEC-003
 * Type: Security – Session Timeout (Simulated)
 * Note: Zero Bank demo app does not enforce real session expiration.
 */

describe('Security - Session Timeout', () => {

  it('Should require login after session expiration due to inactivity', () => {
    cy.visit('/')
    // Login
    cy.login("username", "password")

    // Simulate inactivity / session expiration
    cy.clearCookies()
    cy.clearLocalStorage()

    // Attempt to access protected page
    cy.visit('/bank/account-summary.html')

    // Assert: redirected to login
    cy.url().should('include', 'login.html')

    // Assert: login required again
    cy.get('#user_login').should('be.visible')
    cy.get('#user_password').should('be.visible')

    // Assert: protected content is not visible
    cy.contains('Account Summary').should('not.exist')
  })

})

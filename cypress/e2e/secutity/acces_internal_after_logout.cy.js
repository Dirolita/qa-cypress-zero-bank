/**
 * Test Scenario: TS-SEC-002 
 * User Stories: US-006, US-007
 * Acceptance Criteria: AC-SEC-02, AC-AUTH-03
 * Type: Security / Negative
 */

describe('Security – Access internal URL after logout', () => {

  it('Should deny access after logout and redirect to login', () => {

    // Login (precondition)
    cy.fixture('users').then((users) =>{
        cy.visit('/')
        cy.login(users.validUser.username, users.validUser.password)
    })
    // Logout
    cy.get(':nth-child(3) > .dropdown-toggle').click()
    cy.get('#logout_link').click()

    // Attempt to access protected URL again
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

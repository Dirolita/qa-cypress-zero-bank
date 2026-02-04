/**
 * Test Scenario: TS-AUTH-001-SM
 * User Story: US-001
 * Acceptance Criteria: AC-AUTH-01
 * Type: Smoke Test
 */

describe('Auth - Login Smoke Test', () => {
    beforeEach(
        () => {
            cy.visit('/')
        }
    )
    it('Should allow user to login with valid credentials', ()=>{
        //el fixture carga datos de un archivo json ubicado en cypress/fixtures
        cy.fixture('users').then((users)=>{
        //Act
        cy.login(users.validUser.username, users.validUser.password)
        cy.url().should('include', '/bank/account-summary.html')
        cy.contains('Account Summary').should('be.visible')
        })
    })
});
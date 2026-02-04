/**
 * Test Scenario: TS-AUTH-001-SM
 * User Story: US-002
 * Acceptance Criteria: AC-AUTH-02
 * Type: Negative Path
 */
describe('Login Negative Path', () => {
    it('Should deny access and display an error message',()=>{
        cy.fixture('users').then((users) =>{
            cy.visit('/')
            cy.login(users.invalidUser.username,users.invalidUser.password)

            // Assert – error message
            cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')

            // Assert – user stays on login page
            cy.url().should('include', 'login.html')

            // Assert – dashboard is NOT visible
            cy.contains('Account Summary').should('not.exist')

            // Assert – login form still present
            cy.get('#user_login').should('be.visible')
            cy.get('#user_password').should('be.visible')
                })
    })
});
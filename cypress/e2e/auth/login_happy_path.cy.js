/**
 * Test Scenario: TS-AUTH-002-HP
 * User Story: US-001
 * Type: Happy Path
 */
describe('Auth - Login Happy Path', () => {
    beforeEach(
        () => {
            cy.visit('/')
        })
    it('Should login successfully with valid credentials', ()=>{
        cy.fixture('users').then((users)=>{
        //Act
        cy.login(users.validUser.username, users.validUser.password)
        //Assert - url and visible text
        cy.url().should('include', '/bank/account-summary.html')
        cy.contains('Account Summary').should('be.visible')
        //Assert - menu options
        cy.contains('Account Summary').should('be.visible')
        cy.contains('Account Activity').should('be.visible')
        cy.contains('Transfer Funds').should('be.visible')
        cy.contains('Pay Bills').should('be.visible')
        cy.contains('My Money Map').should('be.visible')
        cy.contains('Online Statements').should('be.visible')
        })
        //Assert - navegation menu
        cy.get('#account_activity_tab > a').click()
        cy.url().should('include', '/bank/account-activity.html')
        cy.get('#transfer_funds_tab > a').click()
        cy.url().should('include', '/bank/transfer-funds.html')
        cy.get('#pay_bills_tab > a').click()
        cy.url().should('include', '/bank/pay-bills.html')
        cy.get('#money_map_tab > a').click()
        cy.url().should('include', '/bank/money-map.html')
        cy.get('#online_statements_tab > a').click()
        cy.url().should('include', '/bank/online-statements.html')
        // logout visibility
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.contains('Logout').should('be.visible')
        
    }
    )

});
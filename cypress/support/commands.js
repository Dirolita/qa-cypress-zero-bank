//Commands
Cypress.Commands.add('login', (username, password) => {
    cy.get('#signin_button').click()
    cy.get('[name="user_login"]').type(username)
    cy.get('[name="user_password"]').type(password)
    cy.get('[name="submit"]').click()
});
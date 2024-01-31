
class SignupPage {
  visit() {
    cy.visit('https://www.demoblaze.com/')
  }

  signUp(username, password) {
    cy.get('#signin2').click()
    cy.get('#sign-username').type(username)
    cy.get('#sign-password').type(password)
    cy.get('button').contains('Sign up').click()
  }

  validateSignupModal() {
    cy.get('#signInModal').should('be.visible')
  }
}
module.exports = SignupPage;

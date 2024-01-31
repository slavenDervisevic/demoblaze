
class LoginPage {

  visit() {
    cy.visit('https://www.demoblaze.com/')
  }

  login(username, password) {
    cy.get('#login2').click()
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.get('button').contains('Log in').click()
  }

  logout() {
    cy.get('#logout2').click()
  }

  loginInvalidUser(username, password) {
    cy.get('#login2').click()
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.get('button').contains('Log in').click()
  }
}


module.exports = LoginPage;

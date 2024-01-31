const LoginPage = require('../../../pageObjects/LoginPage');
import { USER_DATA } from '../../../support/constants';


describe('Logout Test Suite', () => {
  const loginPage = new LoginPage();

  it('should logout successfully', () => {
    loginPage.visit();
    loginPage.login(USER_DATA.USERNAME, USER_DATA.PASSWORD);
    loginPage.logout();

    cy.get('#username').should('not.exist');
    cy.get('#login2').should('be.visible');

  });
});

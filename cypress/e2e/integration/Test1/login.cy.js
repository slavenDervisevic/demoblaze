const LoginPage = require('../../../pageObjects/LoginPage');
import { USER_DATA } from '../../../support/constants';


describe('Login Test Suite', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should log in successfully', () => {
    // Login test logic
    loginPage.login(USER_DATA.USERNAME, USER_DATA.PASSWORD);
  });

  it('should handle invalid login', () => {
    loginPage.login(USER_DATA.WRONGUSER, USER_DATA.PASSWORD);

    cy.get('#logInModal').contains('Log in').click();

    cy.get('#logInModal').should('be.visible');
  });
});

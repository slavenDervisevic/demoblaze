const SignupPage = require('../../../pageObjects/SignupPage');
import { USER_DATA } from '../../../support/constants';


describe('Signup Test Suite', () => {
  const signupPage = new SignupPage();

  it('should sign up successfully', () => {
    signupPage.visit();
    signupPage.signUp(USER_DATA.USERNAME, USER_DATA.PASSWORD);
  });

  it('should handle existing user during signup', () => {
    signupPage.visit();
    signupPage.signUp(USER_DATA.USERNAME, USER_DATA.PASSWORD);

    // Validate if signup with the same user displays a modal
    cy.get('#signInModal').should('be.visible');  
  });
});

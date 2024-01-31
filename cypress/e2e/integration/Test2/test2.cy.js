import CartPage from '../../../pageObjects/CartPage';
import CheckoutPage from '../../../pageObjects/CheckoutPage';
import PhonesPage from '../../../pageObjects/PhonesPage';
import LoginPage  from '../../../pageObjects/LoginPage';
import { USER_DATA } from '../../../support/constants';


describe('Shopping Test Suite', () => {
  const loginPage = new LoginPage();


  it('navigate to home', () => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('log in successfully', () => {
    loginPage.login(USER_DATA.USERNAME, USER_DATA.PASSWORD);
  });


  it('add phones to the cart, remove it and purchase', () => {

    PhonesPage.visitPhones();

    // add random phone to cart
    PhonesPage.clickOnAnyPhone();

    CartPage.clickSuccessButton();

    cy.contains('.nav-link', 'Home').click();

    PhonesPage.visitPhones();

    PhonesPage.clickOnAnyPhone();

    CartPage.clickSuccessButton();

    // go to cart
    CartPage.visitCart();

    //remove item from cart
    CartPage.removeItem();
    cy.wait(1000)

   // go to checkout
    cy.get('.btn-success').click();
  
  })

  it('add phones to the cart, remove it and purchase', () => {
    CheckoutPage.fillOrderForm('Your Name', 'Your Country', 'Your City', '1234567890123456', '12', '2025');
    cy.wait(1000)

    CheckoutPage.placeOrder()    
    
    cy.wait(1000)
    cy.contains('OK').click();
  });

});

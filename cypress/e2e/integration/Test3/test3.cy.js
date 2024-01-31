import CartPage from '../../../pageObjects/CartPage';
import CheckoutPage from '../../../pageObjects/CheckoutPage';
import PhonesPage from '../../../pageObjects/PhonesPage';
import LoginPage  from '../../../pageObjects/LoginPage';
import { USER_DATA } from '../../../support/constants';


describe('Shopping Test Suite', () => {
  const loginPage = new LoginPage();


  it('log in successfully', () => {
    cy.visit('https://www.demoblaze.com/');

    loginPage.login(USER_DATA.USERNAME, USER_DATA.PASSWORD);

  });

  it('add phones to the cart, remove it and purchase', () => {
    cy.visit('https://www.demoblaze.com/');

    PhonesPage.visitPhones();

    // add random phone to cart
    PhonesPage.clickOnAnyPhone();

    CartPage.clickSuccessButton();

    cy.contains('.nav-link', 'Home').click();

    PhonesPage.visitPhones();

    PhonesPage.clickOnAnyPhone();

    CartPage.clickSuccessButton();


    

  });

  it('remove item from card', () => {
     // go to cart
     CartPage.visitCart();

     //remove item from cart
     CartPage.removeItem();
     cy.wait(1000)
  });

  it('purchase an item', () => {
   // go to checkout
   cy.get('.btn-success').click();
  
   CheckoutPage.fillOrderForm('Your Name', 'Your Country', 'Your City', '1234567890123456', '12', '2025');
 
   cy.wait(2000)

   CheckoutPage.placeOrder()    
 });



  it('perform the shopping scenario', () => {
    const enteredName = 'Name'; 
    const cardNumbers = '123456789'; 
    const enteredCity = 'Your City'; 
    
    let totalAmount;
    cy.get('#totalm').invoke('text').then((text) => {
      const match = text.match(/Total: (\d+)/);
      if (match) {
        totalAmount = match[1];
      }
       else {
        totalAmount = "-1";
      }
    });
  
    cy.get('.sweet-alert p').should('be.visible').then((popupText) => {
      const popupContent = popupText.text();

      expect(popupContent).to.contain(enteredName);
      expect(popupContent).to.contain(cardNumbers);
      expect(popupContent).to.contain(totalAmount);
    });
  
    cy.contains('OK').click();
  });
  

  
});

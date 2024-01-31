
class CartPage {

  clickSuccessButton() {
    cy.contains('Add to cart').click();
  }

  visitCart() {
    cy.contains('.nav-link', 'Cart').click();
  }

  removeItem() {
    cy.get('#tbodyid > tr > td').contains('Delete').click();
  }

} 

export default new CartPage();

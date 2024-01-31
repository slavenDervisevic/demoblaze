
class PhonesPage {
  visitPhones() {
    cy.get('.list-group-item').contains('Phones').click();
  }

  clickOnAnyPhone() {
    cy.get('.card-block').its('length').then(numPhones => {
      const randomIndex = Math.floor(Math.random() * numPhones);
      cy.get('.card-block').eq(randomIndex).find('a').click({ force: true });
    });
  }
}


export default new PhonesPage();

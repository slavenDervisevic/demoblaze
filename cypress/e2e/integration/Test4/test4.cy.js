// categoriesTest.js

describe('Categories Test Suite', () => {
  it('validate that main category level page contains all items from subcategories', () => {
    cy.visit('https://www.demoblaze.com/');

    const subcategoryCardsSelector = '#itemc';
    const subcategoryCards = [];

    cy.get(subcategoryCardsSelector).each((subcategory) => {
      cy.wrap(subcategory).click();

      cy.get('.card-title').each((card) => {
        subcategoryCards.push(card.text());
      });

      cy.get('#next2:contains("Next")').click();
    });

    cy.visit('https://www.demoblaze.com/index.html');

    const mainCategoryCardsSelector = '.card-title';
    const mainCategoryCards = [];

    cy.get(mainCategoryCardsSelector).each((card) => {
      mainCategoryCards.push(card.text());
    });

    expect(mainCategoryCards.length).to.equal(subcategoryCards.length);
  });
});

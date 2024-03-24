describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });

  it('Checks if countries are correct for every slide', function () {
    cy.visit('http://localhost:3000');
    cy.get('.card-description p').should('contain', 'Italy');
    cy.get('.card-description h1').should('contain', 'Rome');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.card-description p').should('contain', 'United Kingdom');
    cy.get('.card-description h1').should('contain', 'London');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.card-description p').should('contain', 'France');
    cy.get('.card-description h1').should('contain', 'Paris');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
  });
});
/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Ao acessar a home, deve conter uma lista com 10 clientes.', () => {
    cy.get('tbody tr').should('to.have.length', 10);
    cy.get('tbody tr td').contains('Usuário 9');
    cy.get('h1').contains('Felipe Fadul');
    cy.get('body p').contains('Welcome to Felipe Fadul');
  });
});
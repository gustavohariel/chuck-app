describe('Personalized Joke Options', () => {
  it('fetches and displays a random joke based on input', () => {
    cy.visit('http://localhost:3000');
    cy.get('input').type('Bob');
    cy.contains('Personalized').click();
    cy.contains('Categories').click();
    cy.contains('dev').click();
    cy.wait(500);
    cy.contains('Loading...').should('not.exist');
    cy.get('Joke Result').should('exist');
  });
});

describe('Search Joke Option', () => {
  it('fetches and displays a random joke based on input', () => {
    cy.visit('http://localhost:3000');
    cy.get('input').type('Bob');
    cy.wait(500);
    cy.contains('Loading...').should('not.exist');
    cy.get('Chuck Norris').should('exist');
  });
});

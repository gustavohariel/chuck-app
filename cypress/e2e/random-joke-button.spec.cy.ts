
describe('Random Joke Button', () => {
  it('fetches and displays a random joke', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Hit Me').click();
    cy.contains('Hit Me').should('be.disabled'); 
    cy.contains('Chuck Norris').should('exist', { timeout: 10000 });
    cy.get('.text-wrap').should('exist');
  });
});

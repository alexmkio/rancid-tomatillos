describe('Testing environment', () => {
  it('Should expect true to be true', () => {
    expect(true).to.equal(true);
  });
});

describe('Dashboard user flows', () => {
  it('Should be able to visit http://localhost:3000 and see the header and list of movie posters', () => {
    cy.visit('http://localhost:3000')
      .get('h1').contains('Rancid Tomatillos')
      .get('h2').contains('Featured Films')
      .get('img[id="694919"]').should('be.visible')
      .get('img[id="337401"]').should('be.visible')
  });
});

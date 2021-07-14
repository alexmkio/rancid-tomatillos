describe('Testing environment', () => {
  it('Should expect true to be true', () => {
    expect(true).to.equal(true);
  });
});

describe('Movie Details user flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      movie: {
        id: 694919,
        title: 'Money Plane',
        poster_path: 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
        backdrop_path: 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
        release_date: '2020-09-29',
        overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        genres: ["Action"],
        budget: 0,
        revenue: 0,
        runtime: 82,
        tagline: '',
        average_rating: 6.142857142857143
      }
    });

    cy.visit('http://localhost:3000/');
  });

  it('Should switch to a movie details page when its poster is clicked on the main page', () => {

    cy.get('img[id="694919"').click()
      .url().should('include', '/694919')
  });

  it('Should display the correct movie details on the details page', () => {

    cy.get('img[id="694919"').click()
      .get('h2').contains('Money Plane')
      .get('dd[class="genre"]').contains('Action')
      .get('dl').should('not.contain', 'Revenue')
  });
})

describe('Testing environment', () => {
  it('Should expect true to be true', () => {
    expect(true).to.equal(true);
  });
});

describe('Movie Details user flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      movies: [
        {
          id: 694919,
          poster_path: 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
          backdrop_path: 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
          title: 'Money Plane',
          average_rating: 6.142857142857143,
          release_date: '2020-09-29'
        }, {
          id: 337401,
          poster_path: 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
          backdrop_path: 'https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
          title: 'Mulan',
          average_rating: 5.2727272727272725,
          release_date: '2020-09-04'
        }, {
          id: 718444,
          poster_path: 'https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg',
          backdrop_path: 'https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg',
          title: 'Rogue',
          average_rating: 7,
          release_date: '2020-08-20'
        }
      ]
    });

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

  it('Should return to the main page when the Back button is clicked', () => {
    cy.get('img[id="694919"]').click()
      .get('button').click()
      .url().should('not.include', '/694919')
      .get('h2').contains('Featured Films')
  });

  it('Should be able to navigate using the browser forward/back buttons', () => {
    cy.get('img[id="694919"]').click()
      .go(-1)
      .url().should('not.include', '/694919')
      .go(1)
      .url().should('include', '/694919')
  });

  it('Should show a 404 Error if an invalid URL is entered', () => {
    cy.visit('http://localhost:3000/123456')
      .get('h2').contains('Error 404')
  });

  it('Clicking the back button on the 404 page should return the user to the dashboard', () => {
    cy.visit('http://localhost:3000/123456')
      .get('button').click()
      .url().should('not.include', '/123456')
      .get('h2').contains('Featured Films')
      .get('img[id="694919"]').should('be.visible')
  });

  it('Should show a movie details page when its unique URL is visited', () => {
    cy.visit('http://localhost:3000/694919')
      .get('h2').contains('Money Plane')
      .get('dl').should('not.contain', 'Budget')
  });

  it('Should show a 500 error message on movie details page if server is down', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { statusCode: 500 })
    cy.visit('http://localhost:3000/694919')
      .contains('Error 500')
  });

  it('Should show a loading message while data is being fetched', () => {
    let sendResponse;
    const trigger = new Promise((resolve) => {
      sendResponse = resolve;
    });

    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', (request) => {
      return trigger.then(() => {
        request.reply({
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
      });
    });

    cy.visit('http://localhost:3000/694919')
      .get('h3').should('contain', 'Loading Movie Details').then(() => {
        sendResponse();
        cy.get('h3').should('not.exist')
        cy.get('h2').contains('Money Plane')
      });
  });
});

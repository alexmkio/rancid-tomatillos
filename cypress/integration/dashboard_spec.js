describe('Testing environment', () => {
  it('Should expect true to be true', () => {
    expect(true).to.equal(true);
  });
});

describe('Dashboard user flows', () => {
  it('Should be able to visit http://localhost:3000 and see the header and list of movie posters', () => {

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

    cy.visit('http://localhost:3000')
      .get('h1').contains('Rancid Tomatillos')
      .get('h2').contains('Featured Films')
      .get('img[id="694919"]').should('be.visible')
      .get('img[id="337401"]').should('be.visible')
  });

  it('Should show an error message if there is a problem with the server', () => {

    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 500 })

    cy.visit('http://localhost:3000')
      .get('h1').contains('Rancid Tomatillos')
      .get('h3').contains('Internal Server Error')
  });

  it('Should show placeholder cards while data is loading', () => {
    let sendResponse;
    const trigger = new Promise((resolve) => {
      sendResponse = resolve;
    });

    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', (request) => {
      return trigger.then(() => {
        request.reply({
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
      });
    });

    cy.visit('http://localhost:3000')
      .get('.placeholder-height').should('be.visible').then(() => {
        sendResponse();
        cy.get('.placeholder-height').should('not.exist')
        cy.get('img[id="694919"]').should('be.visible')
      });
  });
});

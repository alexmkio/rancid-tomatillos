export const cleanData = (urlEndPoint, data) => {
  if (urlEndPoint.includes('/')) {
    let backdrop
    if (data.movie.backdrop_path === 'https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg') {
      backdrop = 'https://www.officespacesny.com/wp-content/themes/realestate-7/images/no-image.png'
    } else {
      backdrop = data.movie.backdrop_path
    }
    return {
      average_rating: Math.round(data.movie.average_rating * 100) / 100,
      backdrop_path: backdrop,
      budget: data.movie.budget.toLocaleString('en-US'),
      genres: data.movie.genres,
      overview: data.movie.overview,
      release_date: data.movie.release_date,
      revenue: data.movie.revenue.toLocaleString('en-US'),
      runtime: data.movie.runtime,
      tagline: data.movie.tagline,
      title: data.movie.title
    }
  } else {
    return data.movies.map(movie => {
      return {
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title
      }
    })
  }
};

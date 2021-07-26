export const getApiData = async (endPoint) => {
  let url = `https://rancid-tomatillos.herokuapp.com/api/v2/${endPoint}`
  return await fetch(url);
};
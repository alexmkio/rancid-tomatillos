export const getApiData = async (endPoint) => {
  return await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${endPoint}`);
};
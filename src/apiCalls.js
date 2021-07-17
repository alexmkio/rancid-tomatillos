export const getApiData = async (endPoint) => {
  let response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${endPoint}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  let data = await response.json();
  return data;
};

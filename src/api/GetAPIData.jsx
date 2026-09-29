export const getMoviesData = async () => {
  try {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=b53d4afe&s=avengers"
    );

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
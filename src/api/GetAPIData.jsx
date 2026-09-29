export const getMoviesData = async () => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=avengers`
    );

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
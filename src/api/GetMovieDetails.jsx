export const getMovieDetails = async ({params}) => {
  console.log(params); // should show { movieID: "tt..." }
   
  try {
    const id = params.movieID; // or params.id if your route is :id
    
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
import React, { useEffect, useState } from 'react';
import { useAuthMovie } from '../context/authContextMovie';

const Recomendation = () => {
const { movieCategories, updateMovieCategories } = useAuthMovie();
const [recommendedMovies, setRecommendedMovies] = useState([]);
// updateMovieCategories([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(movieCategories);
useEffect(() => {
    const fetchRecommendedMovies = async () => {
        // Combina todos los arrays internos en un solo array
        const genreIds = movieCategories.flatMap(categories => categories);

        // Encuentra los 3 IDs de género más repetidos
        const genreCounts = genreIds.reduce((acc, genre) => {
            acc[genre] = (acc[genre] || 0) + 1;
            return acc;
        }, {});

        const topGenres = Object.keys(genreCounts)
            .sort((a, b) => genreCounts[b] - genreCounts[a])
            .slice(0, 3);

        console.log(topGenres);

        // Fetch movies based on the top genres
        const response = await fetch(`https://api.example.com/movies?genres=${topGenres.join(',')}`);
        const data = await response.json();
        setRecommendedMovies(data);
    };

    fetchRecommendedMovies();
}, [movieCategories]);

  return (
    <div>
      <h2>Recommended Movies</h2>
      <ul>
        {recommendedMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recomendation;

import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';

// Create the context
export const AuthContextMovie = createContext();

// Create the provider component
export const AuthProviderMovie = ({ children }) => {
  // State to store movie categories
  const [movieCategories, setMovieCategories] = useState(() => {
    // Intenta obtener los géneros de las películas del localStorage al inicio
    const savedMovieCategories = window.localStorage.getItem('movieCategories');
    return savedMovieCategories ? JSON.parse(savedMovieCategories) : [];
  });

  // Function to update movie categories
  const updateMovieCategories = (newCategory) => {
    setMovieCategories(prevCategories => [...prevCategories, newCategory]);
  };
  useEffect(() => {
    // Guarda los géneros de las películas en el localStorage cada vez que se actualizan
    window.localStorage.setItem('movieCategories', JSON.stringify(movieCategories));
  }, [movieCategories]);

 
  const authContextValue = {
    movieCategories,
    updateMovieCategories,
  };

  return (
    <AuthContextMovie.Provider value={authContextValue}>
      {children}
    </AuthContextMovie.Provider>
  );
};

export const useAuthMovie = () => {
    return useContext(AuthContextMovie);
}

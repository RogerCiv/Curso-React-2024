import React, { useState, useEffect, useContext } from "react";
import SearchResultsContext from "../hooks/SearchResultsContext";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const ResultsPage = () => {
  const { searchResults } = useContext(SearchResultsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(8);

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);

  const totalPages = Math.ceil(searchResults.length / resultsPerPage);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="p-20 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 justify-center p-6">
        {currentResults.length > 0 ? (
          currentResults.map((result, index) => (
            <MovieCard key={index} movie={result}  />
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={paginate}
      />
    </div>
  );
};

export default ResultsPage;

import { useContext } from "react";
import SearchResultsContext from "../hooks/SearchResultsContext";
import MovieCard from "../components/MovieCard";

const ResultsPage = () => {
  const { searchResults } = useContext(SearchResultsContext);
  console.log(searchResults)
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 justify-center">
      {searchResults.length > 0 ? (
        searchResults.map((result, index) => (
         <MovieCard key={index} movie={result} />
        ))
      ) : (
        <p>No se encontraron resultados.</p>
      )}

    </div>
  </div>
  );
};

export default ResultsPage;
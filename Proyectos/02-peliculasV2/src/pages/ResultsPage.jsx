import { useContext } from "react";
import SearchResultsContext from "../hooks/SearchResultsContext";

const ResultsPage = () => {
  const { searchResults } = useContext(SearchResultsContext);
  console.log(searchResults)
  return (
    <div>
      {searchResults.map((result, index) => (
        <div key={index}>
          {/* Aquí puedes renderizar la información de cada resultado como prefieras */}
          <h2>{result.title}</h2>
          <p>{result.description}</p>
          {/* ... */}
        </div>
      ))}
    </div>
  );
};

export default ResultsPage;
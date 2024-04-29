import { useLoaderData } from 'react-router-dom';
import ArtCard from '../Components/ArtCard'; // Component for displaying individual art items

const MatchedCategory = () => {
  const arts = useLoaderData(); // Get data from the loader

  return (
    <div className="container mx-auto mt-10 mb-20">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-6">
        All the Arts of {arts[0]?.subcategory || 'Selected Subcategory'} {/* Display the subcategory name */}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "> {/* Grid to display art items */}
        {arts.map((art) => (
          <ArtCard
            key={art._id}
            art={art} // Pass art item data to the ArtCard component
          />
        ))}
      </div>
    </div>
  );
};

export default MatchedCategory;

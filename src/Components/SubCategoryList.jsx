import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SubCategoryCard = ({ subCategory }) => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleCardClick = () => {
    navigate(`/matchedcategory/${subCategory.subcategory.trim()}`); // Redirect to MatchedCategory with the subcategory parameter
  };
  // Define the structure of the card
  return (
    <div onClick={handleCardClick} className="card bg-base-100 shadow-xl p-4 cursor-pointer"> {/* Make the card clickable */}
      <img
        src={subCategory.image}
        alt={subCategory.subcategory}
        className="w-full h-48 object-cover rounded"
      />
      <div className="card-body">
        <h2 className="card-title text-xl text-orange-600">{subCategory.subcategory}</h2>
        <p>{subCategory.description}</p>
      </div>
    </div>
  );
};


const SubCategoryList = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the subcategories from the server
  useEffect(() => {
    fetch('https://painting-and-drawing-server-psi.vercel.app/subcategories') // Adjust endpoint as needed
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setSubCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Run only once on component mount

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div className="container mx-auto mt-10 mb-20">
      <h3 className="text-4xl font-bold text-orange-600 text-center mb-6 ">Subcategories</h3> 
      <p className="text-gray-700 text-xs text-center sm:text-sm md:text-lg lg:text-base xl:text-lg mx-auto w-full md:w-3/4 lg:w-2/3 xl:w-1/2">Discover our diverse range of artistic subcategories, each offering a unique style and perspective.
 </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
        {subCategories.map((subCategory) => (
          <SubCategoryCard key={subCategory._id} subCategory={subCategory} /> 
        ))}
      </div>
    </div>
  );
};

export default SubCategoryList;

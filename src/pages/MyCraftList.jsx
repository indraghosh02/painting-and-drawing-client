import { useEffect, useState } from "react";
import UseAuth from "../Hook/UseAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCraftList = () => {
  const { user } = UseAuth();
  const [crafts, setCrafts] = useState([]);
  const [customizationFilter, setCustomizationFilter] = useState("All"); // State for the customization filter

  useEffect(() => {
    if (user) {
      fetch(`https://painting-and-drawing-server-psi.vercel.app/mycrafts?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCrafts(data);
        });
    }
  }, [user]);

  const handleDelete = (craftId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://painting-and-drawing-server-psi.vercel.app/art/${craftId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setCrafts((prevCrafts) =>
                prevCrafts.filter((craft) => craft._id !== craftId)
              ); // Update the state to remove the deleted craft
              Swal.fire("Deleted!", "Your craft has been deleted.", "success");
            }
          });
      }
    });
  };



  const handleFilterChange = (event) => {
    setCustomizationFilter(event.target.value); // Update the filter when the user selects a new option
  };

  // Filter the crafts based on the customization filter
  const filteredCrafts = customizationFilter === "All"
    ? crafts
    : crafts.filter((craft) => craft.Customization === customizationFilter);

  return (
    <div className="m-20">
      <h3 className="text-6xl text-center mb-10 text-orange-600 font-bold">
        My Art and Drawing
      </h3>

      {/* Dropdown for customization filter */}
      <div className="flex justify-center mb-6">
        <select
          value={customizationFilter}
          onChange={handleFilterChange}
          className="select select-bordered w-1/2"
        >
          <option value="All">All</option>
          <option value="yes">yes</option>
          <option value="no">No</option>
     
          {/* Add additional options as needed */}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCrafts.map((craft) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={craft._id}>
            <figure className="px-10 pt-10">
              <img src={craft.image} alt={craft.name} className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center text-orange-600">
                {craft.name}
              </h2>
              <p className="text-left">Price: {craft.price}</p>
              <p>Rating: {craft.rating}/10</p>
              <p>Customization: {craft.Customization}</p>
              <p>Stock Status: {craft.stock}</p>
              <div className="flex justify-between mt-4">
               <Link to={`/updateart/${craft._id}`}>
               <button
                  
                  className="btn bg-green-600 text-white"
                >
                  Update
                </button>


                {/* <button
                  onClick={() => handleUpdate(craft._id)}
                  className="btn bg-green-600 text-white"
                >
                  Update
                </button> */}
               </Link>
                <button
                  onClick={() => handleDelete(craft._id)}
                  className="btn bg-red-600 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;

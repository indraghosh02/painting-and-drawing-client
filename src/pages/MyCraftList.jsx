import { useEffect, useState } from "react";
import UseAuth from "../Hook/UseAuth";
import Swal from 'sweetalert2'; 

const MyCraftList = () => {
  const { user } = UseAuth(); // Get the logged-in user
  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/mycrafts?email=${user.email}`) // Fetch crafts by the logged-in user's email
        .then((res) => res.json())
        .then((data) => {
          setCrafts(data); // Store the fetched crafts in state
        });
    }
  }, [user]);

  const handleDelete = (craftId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/art/${craftId}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setCrafts((prevCrafts) => prevCrafts.filter((craft) => craft._id !== craftId)); // Update the state to remove the deleted craft
              Swal.fire('Deleted!', 'Your craft has been deleted.', 'success');
            }
          });
      }
    });
  };

  const handleUpdate = (craftId) => {
    // Navigate to a separate page or open a modal to update the craft
    // Implementation depends on your specific application structure
  };

  return (
    <div className="m-20">
      <h3 className="text-6xl text-center mb-10 text-orange-600 font-bold">My Art and Drawing</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {crafts.map((craft) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={craft._id}>
            <figure className="px-10 pt-10">
              <img src={craft.image} alt={craft.name} className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center text-orange-600">{craft.name}</h2>
              <p className="text-left">Price: ${craft.price}</p>
              <p>Rating: {craft.rating}/10</p>
              <p>Customization: {craft.customization}</p>
              <p>Stock Status: {craft.stock}</p>
              <div className="flex justify-between mt-4">
                <button onClick={() => handleUpdate(craft._id)} className="btn bg-green-600 text-white">Update</button>
                <button onClick={() => handleDelete(craft._id)} className="btn bg-red-600 text-white">Delete</button>
{/* 
                <button  className="btn bg-green-600 text-white">Update</button>
                <button  className="btn bg-red-600 text-white">Delete</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;

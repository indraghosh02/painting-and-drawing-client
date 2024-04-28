import { useNavigate } from "react-router-dom";



const TableRow = ({art}) => {
    const navigate = useNavigate();
  
    const {_id, name, subcategory, image, description, price, rating,Customization, time, stock, username, email} = art;


    const viewDetails = () => {
        navigate(`/tableitemdetails/${_id}`); // Navigate to the detail page with the art ID
    };
    return (
        
             <tr>
                <td className="border border-gray-300 bg-base-200 px-4 py-2">{name}</td>
                <td className="border border-gray-300 bg-base-200 px-4 py-2">{subcategory}</td>
                <td className="border border-gray-300 bg-base-200 px-4 py-2">{stock}</td>
                <td className="border border-gray-300 bg-base-200 px-4 py-2">{rating}</td>
                <td className="border border-gray-300 bg-base-200 px-4 py-2">
                  <button onClick={viewDetails}  className="bg-orange-600 text-white py-1 px-4 rounded hover:bg-blue-600">View Details</button>
                </td>
              </tr>
        
    );
};

export default TableRow;
import { useLoaderData } from "react-router-dom";
import TableRow from "../Components/TableRow";


const AllArtCraft = () => {

    const arts = useLoaderData();
    return (
        <div className="bg-black p-10 mt-10 mb-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-center text-orange-600 ">Our Art Items </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Sub-category</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Stock</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Rating</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
            {
              arts.map(art => <TableRow
                key={art._id} 
                art={art}
              >

              </TableRow>
                )
            }


              {/* <tr>
                <td className="border border-gray-300 px-4 py-2">Art Piece 1</td>
                <td className="border border-gray-300 px-4 py-2">Abstract</td>
                <td className="border border-gray-300 px-4 py-2">15</td>
                <td className="border border-gray-300 px-4 py-2">8/10</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">Details</button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      
      </div>
    );
};

export default AllArtCraft;
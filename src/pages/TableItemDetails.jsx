import { useLoaderData } from "react-router-dom";


const TableItemDetails = () => {
    const art = useLoaderData(); 

    if (!art) {
        return <p>Art not found</p>;
    }

    const { name, image, description, price, rating, Customization, time, stock, subcategory, email } = art;

    return (
        <div className="px-4 md:ml-28 md:mr-28 md:mt-20 mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center text-orange-600">{name}</h2>
            <h2 className="text-lg md:text-xl lg:text-xl font-bold mb-5 text-center text-black">({subcategory})</h2>
            <img src={image}  className="w-full h-96 object-cover" />
            <div>
                
            </div>
            <p className="text-gray-700 text-lg mt-4">{description}</p>

            <div className="mt-6 md:flex justify-between">
                <div>
                
                <div className="flex">
                <img className="h-10 w-10" src="https://i.ibb.co/NTRGgwG/icons8-bangladesh-24-1.png" alt="" />
                <p className="text-4xl font-bold ml-2 mb-6 "> {price}</p>
                </div>
                
                
                <p className="text-xl ">Customization: {Customization}</p>
                <p className="text-xl mb-4">Rating: {rating}/10</p>
               
                </div>
                <div>
                <p className="text-4xl font-bold text-green-600 mb-4"> {stock}</p>
                <p className="text-3xl font-bold">Delivery within {time}</p>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="font-bold text-orange-600">Contact Information:</h3>
              
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default TableItemDetails;
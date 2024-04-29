import { useNavigate } from "react-router-dom";


const ArtCard = ({art}) => {

    const navigate = useNavigate();
    const {_id, name, subcategory, image, description, price, rating, Customization, time, stock, username, email} = art;


    const viewDetails = () => {
        navigate(`/homecarddetails/${_id}`); 
    };
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title text-center font-bold text-orange-600">{name}</h2>
    <h2 className="card-title text-center text-gray-600  text-xs">({subcategory})</h2>
    <p className="text-left">{description.slice(0, 100)}.....</p>
    <h2 className="card-title text-center text-gray-600  text-s">BDT-{price}tk</h2>
    
    <div className="flex justify-between">
        
        <h2><span className="text-l font-bold  text-orange-600"> Rating:</span> <span className="text-orange-600">{rating}/10</span></h2>
        <h2 className="text-orange-600 font-bold text-xl">{time}</h2>
    </div>
    <div className="card-actions">
      <button onClick={viewDetails} className="btn bg-orange-600 text-white w-full">View Details</button>
    </div>
  </div>
</div>
    );
};

export default ArtCard;
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';


const UpdateArt = () => {

    const art = useLoaderData();
    const {_id, name, subcategory, image, description, price, rating, Customization, time, stock, username, email} = art;


   

   

    const handleUpdateArt = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const image = form.image.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const Customization = form.Customization.value;
        const time = form.time.value;
        const stock = form.stock.value;


        const updateArt = {name, subcategory, image, description, price, rating,Customization, time, stock}
        console.log(updateArt);


        //send data to server
        fetch(`http://localhost:5000/art/${_id}`,{

        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateArt)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Art Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    return (
        <div className="bg-black p-24 m-20 ">
        <h3 className='text-4xl text-center text-orange-600 font-bold mb-4'> Update Painting and Drawing Items</h3>
        <form onSubmit={handleUpdateArt} >

           {/* row-1 */}
           <div className="md:flex gap-6">
           <div className="form-control md:w-1/2  ">

           <label className="label">
           <span className="label-text text-white font-semibold">Item Name</span>
           </label>
           <label className="input-group">

           <input type="text" name="name" defaultValue={name} placeholder="Item Name" className="input input-bordered w-full " />
           </label>
           </div> 

           {/* 2 */}
           <div className="form-control md:w-1/2">

           <label className="label">
           <span className="label-text text-white font-semibold">subcategory Name</span>
           </label>
           <label className="input-group">

           <input type="text" name="subcategory" defaultValue={subcategory} placeholder="subcategory Name" className="input input-bordered w-full " />
           </label>
           </div> 
           </div>

            {/* row-2 */}
            <div className="md:flex gap-6">
           <div className="form-control md:w-1/2  ">

           <label className="label">
           <span className="label-text text-white font-semibold">Image URL</span>
           </label>
           <label className="input-group">

           <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full " />
           </label>
           </div> 

           {/* 2 */}
           <div className="form-control md:w-1/2">

           <label className="label">
           <span className="label-text text-white font-semibold">Short Description</span>
           </label>
           <label className="input-group">

           <input type="text" name="description" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full " />
           </label>
           </div> 

           </div>
           
            {/* row-3 */}
            <div className="md:flex gap-6">
           <div className="form-control md:w-1/2  ">

           <label className="label">
           <span className="label-text text-white font-semibold">Price</span>
           </label>
           <label className="input-group">

           <input type="text" name="price"  defaultValue={price}  placeholder="Price" className="input input-bordered w-full " />
           </label>
           </div> 

           {/* 2 */}
           <div className="form-control md:w-1/2">

           <label className="label">
           <span className="label-text text-white font-semibold">Rating</span>
           </label>
           <label className="input-group">

           <input type="text" name="rating"  defaultValue={rating}  placeholder="Rating" className="input input-bordered w-full " />
           </label>
           </div> 
           </div>

            {/* row-4 */}
            <div className="md:flex gap-6">
           <div className="form-control md:w-1/2  ">

           <label className="label">
           <span className="label-text text-white font-semibold">Customization</span>
           </label>
           <label className="input-group">

           <input type="text" name="Customization"  defaultValue={Customization}  placeholder="Customization" className="input input-bordered w-full " />
           </label>
           </div> 

           {/* 2 */}
           <div className="form-control md:w-1/2">

           <label className="label">
           <span className="label-text text-white font-semibold">Processing Time</span>
           </label>
           <label className="input-group">

           <input type="text" name="time" defaultValue={time} placeholder="Processing Time" className="input input-bordered w-full " />
           </label>
           </div> 
           </div>

            {/* row-5*/}
            <div className="md:flex gap-6">
           <div className="form-control w-full ">

           <label className="label">
           <span className="label-text text-white font-semibold">stockStatus</span>
           </label>
           <label className="input-group">

           <input type="text" name="stock" defaultValue={stock} placeholder="stockStatus" className="input input-bordered w-full " />
           </label>
           </div> 

           {/* 2 */}
          
           </div>
          
          
           <input type="submit" value="Update" className="btn btn-block bg-orange-600 text-white mt-8"  />

           
        </form>
   </div>
    );
};

export default UpdateArt;
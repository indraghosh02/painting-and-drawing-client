

const AddCraft = () => {
    return (
        <div className="bg-black p-24 m-20 ">
             <h3 className='text-4xl text-center text-orange-600 font-bold mb-4'> Add Painting and Drawing Items</h3>
             <form >

                {/* row-1 */}
                <div className="md:flex gap-6">
                <div className="form-control md:w-1/2  ">

                <label className="label">
                <span className="label-text text-white font-semibold">Item Name</span>
                </label>
                <label className="input-group">

                <input type="text" name="name" placeholder="Item Name" className="input input-bordered w-full " />
                </label>
                </div> 

                {/* 2 */}
                <div className="form-control md:w-1/2">

                <label className="label">
                <span className="label-text text-white font-semibold">subcategory Name</span>
                </label>
                <label className="input-group">

                <input type="text" name="subcategory" placeholder="subcategory Name" className="input input-bordered w-full " />
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

                <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full " />
                </label>
                </div> 

                {/* 2 */}
                <div className="form-control md:w-1/2">

                <label className="label">
                <span className="label-text text-white font-semibold">Short Description</span>
                </label>
                <label className="input-group">

                <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full " />
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

                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full " />
                </label>
                </div> 

                {/* 2 */}
                <div className="form-control md:w-1/2">

                <label className="label">
                <span className="label-text text-white font-semibold">Rating</span>
                </label>
                <label className="input-group">

                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full " />
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

                <input type="text" name="Customization" placeholder="Customization" className="input input-bordered w-full " />
                </label>
                </div> 

                {/* 2 */}
                <div className="form-control md:w-1/2">

                <label className="label">
                <span className="label-text text-white font-semibold">Processing Time</span>
                </label>
                <label className="input-group">

                <input type="text" name="time" placeholder="Processing Time" className="input input-bordered w-full " />
                </label>
                </div> 
                </div>

                 {/* row-5*/}
                 <div className="md:flex gap-6">
                <div className="form-control md:w-1/2  ">

                <label className="label">
                <span className="label-text text-white font-semibold">stockStatus</span>
                </label>
                <label className="input-group">

                <input type="text" name="stockStatus" placeholder="stockStatus" className="input input-bordered w-full " />
                </label>
                </div> 

                {/* 2 */}
                <div className="form-control md:w-1/2">

                <label className="label">
                <span className="label-text text-white font-semibold">User Name</span>
                </label>
                <label className="input-group">

                <input type="text" name="username" placeholder="user Name" className="input input-bordered w-full " />
                </label>
                </div> 
                </div>
               
                <div className="mb-8">
                <div className="form-control w-full">

                        <label className="label">
                        <span className="label-text text-white font-semibold">User Email</span>
                        </label>
                        <label className="input-group">
                       
                        <input type="email" name="email" placeholder="User Email" className="input input-bordered w-full  " />
                         </label>
                 </div> 

                
                 </div>
                <input type="submit" value="Add Item" className="btn btn-block bg-orange-600 text-white mt-8"  />

                
             </form>
        </div>
    );
};

export default AddCraft;
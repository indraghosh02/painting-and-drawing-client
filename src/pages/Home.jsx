import { Link, useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider";
import ArtCard from "../Components/ArtCard";
import SubCategoryList from "../Components/SubCategoryList";


const Home = () => {

  const arts = useLoaderData();
    return (
        <div>
            <Slider></Slider>

            {/* card */}
          <div className="px-4 md:ml-28 md:mr-28 md:mt-20 mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-center text-orange-600 ">Our Art Items</h2>
        <p className="text-gray-700 text-xs text-center sm:text-sm md:text-lg lg:text-base xl:text-lg mx-auto w-full md:w-3/4 lg:w-2/3 xl:w-1/2">Our art items encompass a wide range of unique creations, from delicate pencil sketches to bold oil paintings. Each piece is designed to inspire and bring beauty into your life, offering something for every taste and style.
 </p>
           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-6">
            {
              arts.slice(0, 6).map(art => <ArtCard
                 key={art._id} 
                 art={art}>
                  
                 </ArtCard>)
            }
           </div>
          </div>

          <SubCategoryList></SubCategoryList>


            {/* our team */}
            
            <div>
                <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl text-orange-600 font-bold mb-5">Our Team</h2>
        <p className="text-gray-700 text-sm md:text-lg lg:text-base xl:text-lg  mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2">Meet the talented individuals driving our team's success, each bringing unique skills and expertise to the table </p>
    </div>

    <div className="flex justify-center mb-20">
  <div className="flex flex-wrap justify-center">
    <div className="avatar mr-8 mb-6">
      <div className="w-48 rounded-full overflow-hidden">
        <img src="https://i.ibb.co/LYGyW24/C1ture.jpg" />
       
      </div>
    </div>
  
    <div className="avatar mr-8 mb-6">
      <div className="w-48 rounded-full overflow-hidden">
        <img src="https://i.ibb.co/hZdznVb/Ca2ture.jpg" />
      </div>
    </div>
  
    <div className="avatar mr-8 mb-6">
      <div className="w-48 rounded-full overflow-hidden">
        <img src="https://i.ibb.co/CbSDHqr/Capt3re.jpg" />
      </div>
    </div>
    
   
    
    <div className="avatar  mr-8 mb-6">
      <div className="w-48 rounded-full overflow-hidden">
        <img src="https://i.ibb.co/kyyWxWC/Captu4e.jpg" />
      </div>
    </div>
    <div className="avatar mb-6">
      <div className="w-48 rounded-full overflow-hidden">
        <img src="https://i.ibb.co/7JN3PqP/Cap5re.jpgg" />
      </div>
    </div>
  </div>
</div>

                </div>

                {/* about us  */}
                <div>
                    <div className="bg-gray-600 text-white py-8 px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">Have any questions about our work?</h2>
            <Link to="/aboutUs">
                <button className="bg-white text-zinc-600 rounded-full px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-sm md:text-base lg:text-lg hover:bg-gray-300 hover:text-zinc-600 transition duration-300">More About Us</button>
            </Link>
           
        </div>




            </div>
        </div>
    );
};

export default Home;
import Slider from "../Components/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>


            {/* our team */}
            
            <div>
                <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-5">Our Team</h2>
        <p className="text-gray-700 text-sm md:text-lg lg:text-base xl:text-lg  mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2">Meet the talented individuals driving our team's success, each bringing unique skills and expertise to the table </p>
    </div>

    <div className="flex justify-center mb-20">
  <div className="flex flex-wrap justify-center">
    <div className="avatar mr-8 mb-6">
      <div className="w-48 rounded-full overflow-hidden">
        <img src="https://i.ibb.co/HnGpnsx/successful-businessman.jpg" />
       
      </div>
    </div>
  
    <div className="avatar mr-8 mb-6">
      <div className="w-48 rounded-full overflow-hidden">
        <img src="https://i.ibb.co/Ms8r2cg/young-beautiful-woman-smiling-posing-purple-wall.jpg" />
      </div>
    </div>
  
    <div className="avatar mr-8 mb-6">
      <div className="w-48 rounded-full overflow-hidden">
        <img src="https://i.ibb.co/nPLtVFK/confident-handsome-entrepreneur-with-clasped-hands.jpg" />
      </div>
    </div>
    
   
    
    <div className="avatar  mr-8 mb-6">
      <div className="w-48 rounded-full overflow-hidden">
        <img src="https://i.ibb.co/PQny8Zz/beautiful-caucasian-businesswoman-glasses.jpg" />
      </div>
    </div>
    <div className="avatar mb-6">
      <div className="w-48 rounded-full overflow-hidden">
        <img src="https://i.ibb.co/mbSWYFF/businessman-with-clipboard.jpg" />
      </div>
    </div>
  </div>
</div>

                </div>
        </div>
    );
};

export default Home;
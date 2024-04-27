import UseAuth from "../Hook/UseAuth";


const SocialLogIn = () => {
    const {googleLogin} = UseAuth()
    return (
        <div>
             <div className="form-control mt-10">
          <button onClick={()=>googleLogin() } className="btn bg-white text-black mb-5"> <img src="https://i.ibb.co/YDfp1XT/icons8-google-logo-48-1.png" alt="" />Login with Google </button>
          <button className="btn bg-white text-black"><img src="https://i.ibb.co/2FRFryj/icons8-github-50-1.png" alt="" />Login with Github</button>
        </div>
        </div>
    );
};

export default SocialLogIn;

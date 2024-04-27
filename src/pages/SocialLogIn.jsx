import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";


const SocialLogIn = () => {
    const {googleLogin, githubLogin} = UseAuth();

    //navigation
    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state || '/' ;

    const handleSocialLogin = socialProvider => {
        socialProvider()
        .then(result => {
        if(result.user){
            navigate(form);
        }
        });
      }


    return (
        <div>
             <div className="form-control mt-10 mb-14">
          <button onClick={()=>handleSocialLogin(googleLogin) } className="btn bg-white text-black mb-5"> <img src="https://i.ibb.co/YDfp1XT/icons8-google-logo-48-1.png" alt="" />Login with Google </button>
          <button onClick={()=>handleSocialLogin(githubLogin) } className="btn bg-white text-black"><img src="https://i.ibb.co/2FRFryj/icons8-github-50-1.png" alt="" />Login with Github</button>
        </div>
        </div>
    );
};

export default SocialLogIn;

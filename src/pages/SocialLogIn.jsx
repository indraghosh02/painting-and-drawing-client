import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";


const SocialLogIn = () => {
    const {googleLogin, githubLogin} = UseAuth();

    //navigation
    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state || '/' ;

    // const handleSocialLogin = socialProvider => {
    //     socialProvider()
    //     .then(result => {
    //     if(result.user){
    //         navigate(form);
    //     }
    //     });
    //   }

    const handleSocialLogin = (socialProvider) => {
        socialProvider()
          .then((result) => {
            console.log(result.user)
            if (result.user) 
            
             {
              const { email, displayName } = result.user; // Get email and displayName from the user object
    
              // Create a new user object
              const newUser = {
                email,
                username: displayName || "Unknown User", // Use "Unknown User" if displayName is null
              };
    
              // Send the new user data to the server to store in MongoDB
              fetch("https://painting-and-drawing-server-psi.vercel.app/user", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser), // Convert the user object to JSON
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log("User stored:", data);
                  navigate(form); // Navigate to the desired page after storing the user
                });
            }
          })
          .catch((error) => {
            console.error("Social login error:", error);
          });
      };


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

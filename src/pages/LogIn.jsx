import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import SocialLogIn from "./SocialLogIn";
import { useForm } from "react-hook-form";
import UseAuth from "../Hook/UseAuth";

const LogIn = () => {
  const { signInUser } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          // Show toast on successful login
          toast.success("Login successful!");
          navigate(form); // Navigate after successful login
        }
      })
      .catch((error) => {
        // Show error toast on login failure
        toast.error("Login failed: " + error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-black">
        <div className="">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-5">Login now!</h1>
          </div>
          <div className="card shrink-0 w-screen max-w-sm shadow-2xl bg-orange-600">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
                <label className="label">
                  <h3>
                    New here? Please{" "}
                    <Link
                      className="link link-hover text-black font-bold"
                      to="/register"
                    >
                      Register
                    </Link>
                  </h3>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-black text-white">LogIn</button>
              </div>
            </form>
          
          </div>
          <SocialLogIn />
        </div>
      </div>
      
    </div>
  );
};

export default LogIn;






// import { Link, useLocation, useNavigate } from "react-router-dom";
// import SocialLogIn from "./SocialLogIn";

// import { useForm } from "react-hook-form";
// import UseAuth from "../Hook/UseAuth";



// const LogIn = () => {

//     const { signInUser } = UseAuth()


//     const {
//         register,
//         handleSubmit,
//         formState: { errors }
//       } = useForm()


//        //navigation
//     const navigate = useNavigate();
//     const location = useLocation();
//     const form = location?.state || '/' ;

//       const onSubmit = (data) => {
//       const { email, password } = data;


//       signInUser(email, password)
//       .then(result => {
//         if(result.user){
//             navigate(form);
//         }
//         });


     
//       }

//     return (
//         <div>
//             <div className="hero min-h-screen bg-black">
//   <div className="">
//     <div className="text-center">
//       <h1 className="text-5xl font-bold text-white mb-5">Login now!</h1>
      
//     </div>
//     <div className="card shrink-0 w-screen max-w-sm shadow-2xl bg-orange-600">
//       <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//         <div className="form-control ">
//           <label className="label">
//             <span className="label-text text-white">Email</span>
//           </label>
//           <input type="email" placeholder="email" className="input input-bordered " 
//           {...register("email", { required: true })}
//           />
//            {errors.email && <span  className="text-red-500">This field is required</span>}
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text text-white">Password</span>
//           </label>
//           <input type="password" placeholder="password" className="input input-bordered " 
//             {...register("password", { required: true })}
//           />
//           {errors.password && <span  className="text-red-500">This field is required</span>}
//           <label className="label">
//             <h3 href="#" className="label-text-alt  text-white">New Here? Please <Link className="link link-hover text-black font-bold" to="/register">Register</Link></h3>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary bg-black">LogIn</button>
//         </div>
//       </form>
   
//     </div>
// <SocialLogIn></SocialLogIn>
//   </div>
// </div>
//         </div>
//     );
// };

// export default LogIn;